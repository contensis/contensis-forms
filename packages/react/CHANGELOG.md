# Changelog

## [1.1.0](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.5...@contensis/forms-v1.1.0) (2026-11-12)


### Features

* enhance form state management with started and resumed date/time tracking and scaffolded submission context ([8805f26](https://github.com/contensis/contensis-forms/commit/8805f268db38aa6efe69058d6e82be76c3d7da79))
* include session attribution in form submit context gathered by personalization/experience package ([71d843b](https://github.com/contensis/contensis-forms/commit/71d843b2b3583002a490f549edbef987b0060e4e))
* submission context ([fe19cc8](https://github.com/contensis/contensis-forms/commit/fe19cc85570f4db7a3c67a0ccf3c0ad5caeb837c))


### Bug Fixes

* correct object refs ([e81d962](https://github.com/contensis/contensis-forms/commit/e81d9628ebffb7eba81173a583d39335ba617323))
* count validator considers an incomplete value as 0 ([0d90306](https://github.com/contensis/contensis-forms/commit/0d90306707beb7d644086c49739bebd74c81dcae))
* issue [#18](https://github.com/contensis/contensis-forms/issues/18) count validator now considers a non-completed value as 0 as repeatable select fields do not have an explicit required setting ([879a4e6](https://github.com/contensis/contensis-forms/commit/879a4e68227a47971583cbe1a0a4c9e504de0878))
* respect form context enabled setting ([8269716](https://github.com/contensis/contensis-forms/commit/826971624c0963f3546cbd4ced9585f9fc2943ca))
* tweak `formStartedAt` and `formResumed` logic to respect `autoProgress` form setting, resetting started timestamp when the form is reloaded and not tracking resumed if this is false ([540cd1c](https://github.com/contensis/contensis-forms/commit/540cd1c873562322c897159fa875be3283f510da))

## [1.0.5](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.4...@contensis/forms-v1.0.5) (2026-04-29)


### Bug Fixes

* Hydration error when used with SSR in React v18+ ([#10](https://github.com/contensis/contensis-forms/issues/10)) ([fbf702d](https://github.com/contensis/contensis-forms/commit/fbf702de3e13c855e8f420cbe5173183b97f8996))
* move focus to first field when paging through a form ([#12](https://github.com/contensis/contensis-forms/issues/12)) ([e522948](https://github.com/contensis/contensis-forms/commit/e5229483b13a396c549eed4574996e6dc1a8aed8)), closes [#11](https://github.com/contensis/contensis-forms/issues/11)

## [1.0.4](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.3...@contensis/forms-v1.0.4) (2026-01-06)


### Build

* update CI workflows due to revoked NPM tokens and instead use NPM trusted publishing, fix package.json npm warnings ([a07f3e9](https://github.com/contensis/contensis-forms/commit/a07f3e9b1258473efc982ba3a2bb22c69d1ecc0b))

## [1.0.3](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.2...@contensis/forms-v1.0.3) (2025-03-07)


### Bug Fixes

* fixes a validation issue where the number of days in a month was being miscalculated ([82fb47c](https://github.com/contensis/contensis-forms/commit/82fb47c9441359457ad507619400aad9003ef22d))
* validation issue where the number of days in a month was miscalculated ([2048c5c](https://github.com/contensis/contensis-forms/commit/2048c5c592eb5243a3e4ef2eeea61649ccf96756))

## [1.0.2](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.1...@contensis/forms-v1.0.2) (2025-01-30)


### Bug Fixes

* Show/hide description and title when rendering in page. Hide describedBy if no instructions. ([e09f1cb](https://github.com/contensis/contensis-forms/commit/e09f1cb884a100bb7040f2ebb50a36753c5daaec))

## [1.0.1](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.0...@contensis/forms-v1.0.1) (2024-11-01)


### Bug Fixes

* require two back button presses to navigate back to previous page after a form has rendered ([bf166f4](https://github.com/contensis/contensis-forms/commit/bf166f455a10259e32363c70af4ee4aafcc60a1b))

## 1.0.0 (2024-09-26)

Initial release
