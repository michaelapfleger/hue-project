<template lang="html">
    <div class="container">
        <h1>today</h1>
        <p>tell us a little bit about your day.</p>
        <div class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        </div>
        <div id="icon"></div>
    </div>
</template>
<script>

    export default{
        data: function () {
            return {
                model:{
                    id: 1,
                    user: 1,
                    title: "",
                    image: null,
                    text: "",
                    companions: "",
                    feeling: null
                },
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged: true
                },
                schema: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "Title",
                            model: "title",
                            required: true
                        },
                        {
                            type: "textArea",
                            inputType: "text",
                            label: "Text",
                            model: "text",
                            rows:8,
                            required: true
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Companions",
                            model: "companions"
                        },
                        {
                            type: "radios",
                            label: "Feeling",
                            model: "feeling",
                            values: [
                                "mood",
                                "sentiment_very_satisfied",
                                "sentiment_satisfied",
                                "sentiment_neutral",
                                "sentiment_dissatisfied",
                                "sentiment_very_dissatisfied",
                                "mood_bad"
                            ]
                        },
                        {
                            type: "image",
                            label: "Image",
                            model: "image",
                            browse: true,
                            preview: true
                        },
                        {
                            type: "submit",
                            buttonText: "Save",
                            validateBeforeSubmit: true
                        }

                    ]
                }
            }
        }
    }
</script>
<style lang="sass" scoped>
</style>