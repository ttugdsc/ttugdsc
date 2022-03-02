module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    "prettier"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/multi-word-component-names": "off"
  },
  overrides: [
    {
      "files": ["*-test.js", "*.spec.js"],
      rules: {
        "no-undef": 1
      }
    }
  ]
}