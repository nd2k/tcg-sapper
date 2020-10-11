<script>
  import Modal from '../components/Modal.svelte';
  import TextInput from './TextInput.svelte';
  import Button from './Button.svelte';
  import { isEmpty, isValidEmail } from '../helpers/validations';
  import { showAlertNotification, alertMessage, showSpinner } from '../store';

  import { fly } from 'svelte/transition';
  import Icon from 'fa-svelte';
  import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
  import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
  import { faCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots';

  let screenWidth;
  let mobileWidth = 640;
  let comments = faComments;
  let phone = faPhone;
  let email = faEnvelope;
  let commentDots = faCommentDots;
  let show = false;
  let showModal = false;
  let firstNameValue = '';
  let lastNameValue = '';
  let emailValue = '';
  let phoneValue = '';
  let messageValue = '';
  let status = '';
  let message = '';
  let loading = false;

  $: showAlertNotification.subscribe(value => {
    status = value;
  })

  $: alertMessage.subscribe(value => {
    message = value;
  })

  $: showSpinner.subscribe(value => {
    loading = value;
  })

  $: firstNameValueValid = !isEmpty(firstNameValue);
  $: lastNameValueValid = !isEmpty(lastNameValue);
  $: emailValueValid = isValidEmail(emailValue)
  $: phoneValueValid = !isEmpty(phoneValue);
  $: messageValueValid = !isEmpty(messageValue);
  $: formIsValid = firstNameValueValid && lastNameValueValid && emailValueValid && phoneValueValid && messageValueValid;

  function submitMessage() {
    let dataForm = { firstNameValue, lastNameValue, emailValue, phoneValue, messageValue };
    let url = 'sendEmail';
    showModal = false;
    showSpinner.set(true);
    resetForm();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      res.json()
      .then(function() {
        showSpinner.set(false);
        showAlertNotification.set('success')
        alertMessage.set('Votre message a bien été envoyé. Nous vous répondrons dans les plus bref délais')
        setTimeout(() => {
          showAlertNotification.set('');
          alertMessage.set('');
        }, 3000);
      })
    })
    .catch(error => {
      console.log(error)
      showSpinner.set(false);
      showAlertNotification.set('error')
      alertMessage.set("Un problème est survenu lors de l'envoi de votre message. Veuillez recommencer.")
      setTimeout(() => {
          showAlertNotification.set('');
          alertMessage.set('');
        }, 5000);
    })
  }

  function resetForm() {
    firstNameValue = '';
    lastNameValue = '';
    emailValue = '';
    phoneValue= '';
    messageValue = '';
    firstNameValueValid = false;
    lastNameValueValid = false;
    emailValueValid = false;
    phoneValueValid = false;
    messageValueValid = false;
  }

</script>

<style lang="scss">
  @import '../styles/theme.scss';

  .form {
    padding: 1rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contactButton {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      position: fixed;
      background-color: $red;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      z-index: 100;
      color: $white;
      text-transform: uppercase;
      cursor: pointer;
      outline: none;
      border: none;
      box-shadow: 0.75rem 0.75rem 1rem 0 rgba(0, 0, 0, 0.25),
                0.5rem 0.5rem 0.75rem 0 rgba(255, 255, 255, 0.3);
      &.mainContact{
        bottom: 2rem;
        right: 2rem;
      }
      &.emailContact {
        bottom: 10rem;
        right: 2rem;
      }
      &.formContact {
        bottom: 8rem;
        right: 8rem;
      }
      &.phoneContact {
        bottom: 2rem;
        right: 10rem;
      }
      @media only screen and (max-width: $mobile-width) {
        width: 3rem;
        height: 3rem;
        &.mainContact{
          bottom: 1rem;
          right: 1rem;
        }
        &.emailContact {
          bottom: 5rem;
          right: 1rem;
        }
        &.formContact {
          bottom: 4rem;
          right: 4rem;
        }
        &.phoneContact {
          bottom: 1rem;
          right: 5rem;
        }
      }
    }
  }
  div :global(.icon) {
    font-size: 2rem;
    @media only screen and (max-width: $mobile-width) {
      font-size: 1rem;
    }
  }

  a :global() {
    text-decoration: none;
    color: $white;
  }
</style>

<svelte:window bind:innerWidth={screenWidth} />

{#if showModal}
<Modal title="Contactez-nous" on:closeModal={() => showModal = false}>
  <form class="form">
    <TextInput 
        labelOfTextInput="Votre prénom" 
        idOfTextInput="firstName" 
        bindingValue="firstName" 
        on:input={event => (firstNameValue = event.target.value)} 
        validityMessage="Le champ 'prénom' est vide"
        valid={firstNameValueValid}/>
    <TextInput 
        labelOfTextInput="Votre nom" 
        idOfTextInput="name" 
        bindingValue="name" 
        on:input={event => (lastNameValue = event.target.value)} 
        validityMessage="Le champ 'nom' est vide"
        valid={lastNameValueValid}/>
    <TextInput 
        labelOfTextInput="Votre email" 
        idOfTextInput="email" 
        bindingValue="email" 
        on:input={event => (emailValue = event.target.value)} 
        validityMessage="L'adresse email n'est pas valide"
        valid={emailValueValid}/>
    <TextInput 
        labelOfTextInput="Votre numéro de téléphone" 
        idOfTextInput="phone" 
        bindingValue="phone" 
        on:input={event => (phoneValue = event.target.value)} 
        validityMessage="Le champ 'téléphone' est vide"
        valid={phoneValueValid}/>
    <TextInput 
        typeOfInput="textarea" 
        rowsOfTextarea="5" 
        labelOfTextInput="Votre message" 
        idOfTextInput="message" 
        bindingValue="message" 
        on:input={event => (messageValue = event.target.value)}
        validityMessage="Le champ 'message' est vide"
        valid={messageValueValid}/>
  </form>
  <div class="buttons">
      <Button on:click={submitMessage} disabled={!formIsValid}>
        Envoyé
      </Button>
  </div>
  </Modal>
{/if}

<div class="contactButton">
  <button class="mainContact" on:click={() => { show = !show}}>
    <Icon class="icon" icon = {comments} />
  </button>
  {#if show && screenWidth > mobileWidth}
    <button class="emailContact" transition:fly="{{duration: 500, x: 0, y: 100, opacity: 0}}">
      <a 
        href="mailto:nicolas.decat@gmail.com"
        on:click={() => { show = !show}} >
        <Icon class="icon" icon = {email} />
      </a>
    </button>
    <button 
        class="formContact" 
        transition:fly="{{duration: 500, x: 100, y: 100, opacity: 0}}"
        on:click={() => showModal = !showModal}
        on:click={() => { show = !show}}
        on:click={() => resetForm()}>
      <Icon class="icon" icon = {commentDots} />
    </button>
    <button class="phoneContact" transition:fly="{{duration: 500, x: 100, y: 0, opacity: 0}}">
      <a 
        href="tel:+32499602548"
        on:click={() => { show = !show}} >
        <Icon class="icon" icon = {phone} />
      </a>
    </button>
  {/if}

  {#if show && screenWidth < mobileWidth}
  <button class="emailContact" transition:fly="{{duration: 300, x: 0, y: 25, opacity: 0}}">
    <a 
      href="mailto:nicolas.decat@gmail.com"
      on:click={() => { show = !show}} >
      <Icon class="icon" icon = {email} />
    </a>
  </button>
  <button 
      class="formContact" 
      transition:fly="{{duration: 300, x: 25, y: 25, opacity: 0}}"
      on:click={() => showModal = !showModal}
      on:click={() => { show = !show}}>
    <Icon class="icon" icon = {commentDots} />
  </button>
  <button class="phoneContact" transition:fly="{{duration: 300, x: 25, y: 0, opacity: 0}}">
    <a 
      href="tel:+32499602548"
      on:click={() => { show = !show}} >
      <Icon class="icon" icon = {phone} />
    </a>
  </button>
{/if}
  
</div>