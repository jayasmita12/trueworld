<script>
  import { onMount } from "svelte";
  import { enhance, applyAction } from "$app/forms";
  import Input from "./Input.svelte";

  export let form;
  export let privacyCheck = true;
  export let contactData;
  const inputs = contactData[1]?.input ? contactData[1]?.input : [];

  let isHuman = false;
  let verifying = false;
  let score;
  let captchaV2 = false;

  async function verifyCaptcha() {
    console.log("clicked.Page.");
    // e.preventDefault();
    grecaptcha.ready(function () {
      console.log("Exicuting..");
      grecaptcha
        .execute("6Lee2iskAAAAABld9G9oz9oHSGjinZnLplCkci0X", {
          action: "submit",
        })
        .then(async function (token) {
          verifying = true;
          // Add your logic to submit to your backend server here.
          // console.log(token);
          const option = {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: {
              "content-type": "application/json",
            },
          };

          let res = await fetch("/api/capctha", option);
          let data = await res.json();

          if (data) {
            score = data.data.score;
            // console.log(data);
            if (data.data.success && data.data.score > 0.4) {
              console.log("loging");
              verifying = false;
              isHuman = true;
            }
          }
        });
    });
  }

  import { Recaptcha, recaptcha, observer } from "svelte-recaptcha-v2";
  /*
  │Recaptcha: svelte <Recaptcha> component.
  │recaptcha: google method, gives you recaptcha.execute().
  │observer: allows you to track captcha state across components.
  */

  const googleRecaptchaSiteKey = "6LfzvGEkAAAAAFujSkBeXR5WnJhLrE8EMAoxMYgo";

  const onCaptchaReady = (event) => {
    console.log("recaptcha init has completed.");
    /*
      │You can enable your form button here.
      */
  };

  const onCaptchaSuccess = (event) => {
    // userTracker.resolve(event);
    console.log("token received: " + event.detail.token);
    /*
        │If using checkbox method, you can attach your
        │form logic here, or dispatch your custom event.
        */
    captchaV2 = true;
  };

  const onCaptchaError = (event) => {
    console.log("recaptcha init has failed.");
    /*
        │Usually due to incorrect siteKey.
        |Make sure you have the correct siteKey..
        */
  };

  const onCaptchaExpire = (event) => {
    console.log("recaptcha api has expired");
    /*
        │Normally, you wouldn't need to do anything.
        │Recaptcha should reinit itself automatically.
        */
  };

  const onCaptchaOpen = (event) => {
    console.log("google decided to challange the user");
    /*
        │This fires when the puzzle frame pops.
        */
  };

  const onCaptchaClose = (event) => {
    console.log("google decided to challange the user");
    /*
        │This fires when the puzzle frame closes.
        │Usually happens when the user clicks outside
        |the modal frame.
        */
  };
</script>

<!-- <svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render=6Lee2iskAAAAABld9G9oz9oHSGjinZnLplCkci0X"></script>
  <script>
    grecaptcha.ready(() => {
      grecaptcha.render('gCaptchaBadge', {
         'sitekey' : '6LfzvGEkAAAAAFujSkBeXR5WnJhLrE8EMAoxMYgo'
      });
    });
  </script>
</svelte:head> -->

<!-- action='https://forms.zohopublic.in/tclabs/form/trueworldlanding/formperma/vt91XE3iODV_ibxR1zi-O53EGhqIVZGmbUxYDasfgFU/htmlRecords/submit' -->
<!-- form?.success -->

<form
  action="/contact"
  use:enhance={() => {
    return async ({ result }) => {
      await applyAction(result);
    };
  }}
  method="POST"
  name="form"
  id="contact-form"
  accept-charset="UTF-8">
  <div
    id="contact"
    class="px-[5%] xl:px-0 py-10 pb-[8rem] bg-base-300 text-white ">
    <div class="mb-8 md:mb-10 max-w-7xl mx-auto h-fit">
      {#if form?.success}
        <div class="alert alert-success shadow-lg mb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your message has been submited!</span>
            <p class="success">{form?.status || ""}</p>
          </div>
        </div>
      {/if}
      {#if contactData[0]}
        <h1
          class="text-3xl xl:text-tw-title font-medium leading-tight drop-shadow-md">
          {contactData[0]?.title ?? ""}
        </h1>
        <p class="text-sm md:text-tw-2 mt-3">
          {contactData[0]?.description ?? ""}
        </p>
      {/if}
    </div>
    <div
      class="max-w-7xl mx-auto xl:px-0 text-tw-4 grid grid-cols-1 md:grid-cols-2 gap-x-14">
      {#if inputs[0]}
        <div class="h-20">
          <Input
            name="name"
            fieldType="1"
            label={inputs[0]?.text}
            labelFor="name"
            type="text"
            placeholder={inputs[0]?.placeholder}
            value={form?.name || ""} />
          <!--  -->
          {#if form?.errors?.name}
            <p class="text-red-500 mt-1">{form?.errors?.name}</p>
          {/if}
        </div>
      {/if}
      {#if inputs[1]}
        <div class="h-20">
          <Input
            name="organization"
            fieldType="9"
            label={inputs[1]?.text}
            labelFor="organization"
            type="text"
            placeholder={inputs[1]?.placeholder}
            value={form?.organization || ""} />
          {#if form?.errors?.organization}
            <p class="text-red-500 mt-1">{form?.errors?.organization}</p>
          {/if}
        </div>
      {/if}
      {#if inputs[2]}
        <div class="h-20">
          <Input
            name="email"
            label={inputs[2]?.text}
            labelFor="email"
            type="email"
            placeholder={inputs[2]?.placeholder}
            value={form?.email || ""} />
          {#if form?.errors?.email}
            <p class="text-red-500 mt-1">{form?.errors?.email}</p>
          {/if}
        </div>
      {/if}
      {#if inputs[3]}
        <div class="h-20">
          <Input
            name="phone"
            label={inputs[3]?.text}
            labelFor="phone"
            type="tel"
            placeholder={inputs[3]?.placeholder}
            value={form?.phone || ""} />
          {#if form?.errors?.phone}
            <p class="text-red-500 mt-1">{form?.errors?.phone}</p>
          {/if}
        </div>
      {/if}

      {#if contactData[2]?.__component === "block.dropdown"}
        <div class="h-20">
          <label class="text-sm" for="reason">
            {contactData[2]?.subtitle ?? ""}
          </label>
          <div class="mt-1 p-1 border border-gray-200 rounded-sm">
            <select
              form="contact-form"
              name="reason"
              class="border-none outline-none bg-transparent text-lg w-full"
              id="reason"
              value={form?.reason || contactData[2]?.dropdown_texts[0]?.text}>
              {#each contactData[2]?.dropdown_texts as option}
                <option value={option.text}>{option.text}</option>
              {/each}
            </select>
          </div>
          {#if form?.errors?.reason}
            <p class="text-red-500 mt-1">{form?.errors?.reason}</p>
          {/if}
        </div>
      {/if}

      {#if contactData[3]?.__component === "block.dropdown"}
        <div class="h-20">
          {#if contactData[3]?.subtitle}
            <label class="text-sm" for="department">
              {contactData[3]?.subtitle ?? ""}</label>
          {/if}
          <div
            class="{contactData[3]?.subtitle ? 'mt-1' : 'mt-6'} 
              p-1 border border-gray-200 rounded-sm">
            <select
              form="contact-form"
              value={form?.department ||
                contactData[3]?.dropdown_texts[0]?.text}
              name="department"
              class="border-none outline-none bg-transparent text-lg w-full">
              {#each contactData[3]?.dropdown_texts as option}
                <option value={option.text}>{option.text}</option>
              {/each}
            </select>
          </div>
          {#if form?.errors?.department}
            <p class="text-red-500 mt-1">{form?.errors?.department}</p>
          {/if}
        </div>
      {/if}

      {#if contactData[4]?.__component === "block.textarea"}
        <div class="md:col-span-2 h-32">
          <label class="text-sm pb-2" for="message">
            {contactData[4]?.text ?? ""}
          </label>
          <textarea
            class="bg-transparent text-base w-full border-b border-white focus:outline-none p-0"
            placeholder={contactData[4]?.placeholder ?? ""}
            name="message"
            label={contactData[4]?.text ?? ""}
            id=""
            cols="30"
            rows="3"
            value={form?.message || ""} />
          {#if form?.errors?.message}
            <p class="text-red-500 mt-1">{form?.errors?.message}</p>
          {/if}
        </div>
      {/if}

      <!-- <div class="md:col-span-2 border-b border-gray-200" /> -->
      <div class="md:col-span-2 flex flex-col lg:flex-row items-start gap-x-12">
        {#if contactData[5]?.__component === "block.check-box"}
          <div class="flex flex-col h-14">
            <div class="flex items-center gap-x-2">
              <input
                id="privacyConditions"
                class="h-5 w-5 rounded-full checkbox checkbox-primary border-white hover:border-white"
                type="checkbox"
                bind:checked={privacyCheck} />
              <label for="privacyConditions">
                <span>{contactData[5]?.text ?? ""} </span>
                <a
                  class="underline"
                  href={contactData[5]?.link ?? ""}
                  target="_blank"
                  rel="noreferrer">
                  {contactData[5]?.link_text ?? ""}
                </a>
              </label>
            </div>
            {#if !privacyCheck}
              <p class="text-red-500 mt-1">please accept our privacy policy</p>
            {/if}
          </div>
        {/if}

        {#if contactData[6]?.__component === "block.check-box"}
          <div class="flex items-center gap-x-2">
            <input
              id="receiveEmail"
              class="h-5 w-5 rounded-full checkbox checkbox-primary border-white hover:border-white"
              type="checkbox" />
            <label for="receiveEmail">
              {contactData[6]?.text ?? ""}
            </label>
          </div>
        {/if}
      </div>
      <div class="flex flex-col mt-7 lg:mt-0 h-14">
        <!-- <div class="g-recaptcha" data-sitekey="6LfdUTAkAAAAALxbRSi3sM6Nm6MRS9EgQN8-yAl6"></div> -->
        <!-- data-sitekey="6LfdUTAkAAAAALxbRSi3sM6Nm6MRS9EgQN8-yAl6"  -->
        <!-- 2nd-6LfdUTAkAAAAAHLybxuirO91pjdE_qZiNZlrLx2v -->

        <!-- <Recaptcha
          sitekey={googleRecaptchaSiteKey}
          badge={"top"}
          size={"visible"}
          on:success={onCaptchaSuccess}
          on:error={onCaptchaError}
          on:expired={onCaptchaExpire}
          on:close={onCaptchaClose}
          on:ready={onCaptchaReady} /> -->

        {#if contactData[7]?.text}
          <button
            type="submit"
            class="btn btn-sm btn-outline rounded-full px-8 text-white hover:bg-white hover:text-tw-blue
          g-recaptcha capitalize text-base font-base bg-transparent w-fit mt-3">
            {contactData[7]?.text ? contactData[7]?.text : "Send"}
          </button>
        {/if}
      </div>
    </div>
  </div>
</form>

<style>
  input:focus {
    outline: none;
  }

  select option {
    margin: 40px;
    background: #05324d;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  }
</style>
