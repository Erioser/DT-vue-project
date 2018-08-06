<template>
    <div class="ui-input">
        <input :placeholder="placeholder" :type="type || 'text'" :value="value" @input="$emit('input', $event.target.value)" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ui-input',
    props: ['value', 'type', 'placeholder']
}
</script>
<style lang="scss" scoped>
    .ui-input {
        padding: 0.15rem;
        height: 0.5rem;
        position: relative;
        input {
            display: block;
            width: 100%;
            height: 100%;
            border: none;outline:none;
            background: none;
            font-size: 0.16rem;
        }
        border-bottom: 1px dashed #d1d0d0;
    }
</style>

