<script>
  export let label;
  export let labelFor;
  export let type;
  export let placeholder;
  export let fieldType;
  export let name;
  export let value;
</script>

<div>
  <label class="text-sm" for={labelFor}>{label}</label>

  <input
    {value}
    class="mt-1 text-lg border-b border-gray-200 bg-transparent w-full focus:outline-none"
    id={labelFor}
    {type}
    {placeholder}
    {fieldType}
    {name} />
</div>
