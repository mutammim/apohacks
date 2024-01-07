<script lang="ts">
  export let form_class =
    "mt-1 flex overflow-clip bg-[#280f61] shadow-[inset_5px_5px_#0c0726] lg:mt-2";

  let loading = false;
  let success = false;
  let email: string;

  function submitHandler() {
    console.log("submitting email", email);
    loading = true;
    fetch("/api/lists/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        loading = false;
        if (res.status === 200) {
          console.log("success");
          success = true;
        } else {
          console.log("failure");
          success = false;
        }
      })
      .catch(() => {
        console.log("err");
        loading = false;
        success = false;
      });
  }
</script>

<form
  action="https://postal.hackclub.com/subscribe"
  method="POST"
  accept-charset="utf-8"
  class={form_class}
  id="email-form"
  on:submit|preventDefault={submitHandler}
>
  <!-- Coloring for <form> was originally bg-dark-bg shadow-[inset_5px_5px_rgba(0,0,0,0.3)] -->
  <!-- Fix alignment for this text -->
  <input
    class="flex-1 bg-transparent pl-4 text-xl placeholder-white placeholder-opacity-75 focus:outline-none sm:pl-6 sm:text-2xl lg:text-3xl"
    placeholder="you@example.com"
    type="email"
    name="email"
    id="email"
    required
    bind:value={email}
    on:keydown={() => {
      success = false;
    }}
  />
  <input type="hidden" name="list" value="YAbJpY892wYYel892gyGNghouQ" />
  <input type="hidden" name="subform" value="yes" />
  <label
    for="submit"
    id="email-button"
    class="group flex cursor-pointer items-center px-4 py-2 sm:px-7 sm:py-3"
  >
    {#if !loading && !success}
      <svg
        class="h-6 w-6 text-white motion-safe:transition-transform motion-safe:group-hover:translate-x-1 sm:h-8 sm:w-8"
        id="todo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
          fill="currentColor"
        >
        </path>
      </svg>
    {:else if loading}
      <svg
        id="loading"
        class="h-6 w-6 animate-spin text-white sm:h-8 sm:w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9999 2H10.9999V8H12.9999V2ZM12.9999 16H10.9999V22H12.9999V16ZM21.9998 11V13L15.9998 13V11H21.9998ZM7.99963 13V11H1.99963V13L7.99963 13ZM14.9996 6.99997H16.9996V8.99997H14.9996V6.99997ZM18.9995 4.99997H16.9995V6.99997H18.9995V4.99997ZM8.99963 6.99997H6.99963V8.99997H8.99963V6.99997ZM4.99973 4.99997H6.99973V6.99997H4.99973V4.99997ZM14.9996 17H16.9995V18.9999H18.9995V16.9999H16.9996V15H14.9996V17ZM6.99963 16.9999V15H8.99963V17H6.99973V18.9999H4.99973V16.9999H6.99963Z"
          fill="currentColor"
        ></path></svg
      >
    {:else if success}
      <svg
        id="done"
        class="h-6 w-6 text-white sm:h-8 sm:w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 4H20H22V6V14H20V6H4V18H12V20H4H2V18V6V4H4ZM8 8H6V10H8V12H10V14H14V12H16V10H18V8H16V10H14V12H10V10H8V8ZM14 18H16V20H14V18ZM18 20V22H16V20H18ZM20 18H18V20H20V18ZM20 18V16H22V18H20Z"
          fill="currentColor"
        ></path></svg
      >
    {/if}
  </label>
  <input type="submit" name="submit" id="submit" value="" class="w-0" />
</form>
