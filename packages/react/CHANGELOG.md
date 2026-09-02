# Changelog

## [1.0.6](https://github.com/contensis/contensis-forms/compare/@contensis/forms-v1.0.5...@contensis/forms-v1.0.6) (2026-09-02)


### Bug Fixes

* count validator considers an incomplete value as 0 ([0d90306](https://github.com/contensis/contensis-forms/commit/0d90306707beb7d644086c49739bebd74c81dcae))
* issue [#18](https://github.com/contensis/contensis-forms/issues/18) count validator now considers a non-completed value as 0 as repeatable select fields do not have an explicit required setting ([879a4e6](https://github.com/contensis/contensis-forms/commit/879a4e68227a47971583cbe1a0a4c9e504de0878))

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
