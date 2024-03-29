# @qualifyze/design-system

## 3.2.2

### Patch Changes

- [#336](https://github.com/Qualifyze/design-system/pull/336) [`a9b2cdc`](https://github.com/Qualifyze/design-system/commit/a9b2cdcdcfb82cc03d0eef89167fa5d3158c5d8c) Thanks [@phjardas](https://github.com/phjardas)! - Exclude node_modules from transitive dependencies in bundle.

## 3.2.1

### Patch Changes

- [#334](https://github.com/Qualifyze/design-system/pull/334) [`e23ee73`](https://github.com/Qualifyze/design-system/commit/e23ee73219674e16a61d02773841bbde7503dd81) Thanks [@phjardas](https://github.com/phjardas)! - Set background color to white

* [#334](https://github.com/Qualifyze/design-system/pull/334) [`97ea365`](https://github.com/Qualifyze/design-system/commit/97ea36574264a982ef3ef424ad984f57c2453087) Thanks [@phjardas](https://github.com/phjardas)! - Fix font weight of bold elements inside of Text

- [#334](https://github.com/Qualifyze/design-system/pull/334) [`455eb3b`](https://github.com/Qualifyze/design-system/commit/455eb3be0efd3506b0fa20157b226e0fd753ca05) Thanks [@phjardas](https://github.com/phjardas)! - Fix color of focus ring

* [#334](https://github.com/Qualifyze/design-system/pull/334) [`1fb6b3d`](https://github.com/Qualifyze/design-system/commit/1fb6b3dc2035fe54b2b968fd0226a9aff0034690) Thanks [@phjardas](https://github.com/phjardas)! - Use grey instead of pink as the secondary color

  Also removes the color `grey[50]` which was [accidentally
  introduced](https://github.com/Qualifyze/design-system/pull/332/files#diff-bfec1adb785179eff20a9a075d532f32059c2a9de10caacf6e7e20f396423143R48)
  one day earlier. We can be quite sure that nobody is using this color so
  far, so no need for a major release.

## 3.2.0

### Minor Changes

- [#331](https://github.com/Qualifyze/design-system/pull/331) [`af86ebc`](https://github.com/Qualifyze/design-system/commit/af86ebc00078d8479ddb2ae68e8118b38d284939) Thanks [@phjardas](https://github.com/phjardas)! - Use fonts from new branding (Everett)

* [#332](https://github.com/Qualifyze/design-system/pull/332) [`9d7d823`](https://github.com/Qualifyze/design-system/commit/9d7d8233b411a907966192980680fb7760308db8) Thanks [@phjardas](https://github.com/phjardas)! - Use colors from new branding

## 3.1.1

### Patch Changes

- [#329](https://github.com/Qualifyze/design-system/pull/329) [`1b6a950`](https://github.com/Qualifyze/design-system/commit/1b6a950ecd080aca33ffeb09622009544fbf1542) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Add disabled button styles to the ds

## 3.1.0

### Minor Changes

- [#325](https://github.com/Qualifyze/design-system/pull/325) [`45d54cf`](https://github.com/Qualifyze/design-system/commit/45d54cfb1fa7cd49689883c5149e80a12050b5fc) Thanks [@phjardas](https://github.com/phjardas)! - Downgrade @reach/menu-button to v16

  v17 tries to import new members from React v18 which fails in current webpack versions.

## 3.0.0

### Major Changes

- [#318](https://github.com/Qualifyze/design-system/pull/318) [`bdfce17`](https://github.com/Qualifyze/design-system/commit/bdfce17dad8b1119ca5252d899d9cb26ac489d2a) Thanks [@phjardas](https://github.com/phjardas)! - Migrate dropdown menu to use Reach instead of Radix. The new menu does _not_ support nested menus anymore. Note that there's a known issue with focus handling when using keyboard navigation.

### Minor Changes

- [#222](https://github.com/Qualifyze/design-system/pull/222) [`cf8db94`](https://github.com/Qualifyze/design-system/commit/cf8db94114cac5d89ec5223e58ceeba0e1ecf92e) Thanks [@phjardas](https://github.com/phjardas)! - Reduce usage of secondary color across many components

### Patch Changes

- [#320](https://github.com/Qualifyze/design-system/pull/320) [`16d422f`](https://github.com/Qualifyze/design-system/commit/16d422fb44744e750e090c49204f389d8ffc5dce) Thanks [@phjardas](https://github.com/phjardas)! - AppBar: adapt parent theme instead of overriding it

## 2.1.2

### Patch Changes

- [#321](https://github.com/Qualifyze/design-system/pull/321) [`131cf07`](https://github.com/Qualifyze/design-system/commit/131cf07d9660337ae889d75081a459277a388880) Thanks [@vubogovich](https://github.com/vubogovich)! - Align navigation actions in `AppBar`.

## 2.1.1

### Patch Changes

- [#316](https://github.com/Qualifyze/design-system/pull/316) [`b9f3492`](https://github.com/Qualifyze/design-system/commit/b9f349217038a3b5d88b9e3b0752e174707bea26) Thanks [@BartekQuali](https://github.com/BartekQuali)! - Fix missmatched tag tone name

## 2.1.0

### Minor Changes

- [#313](https://github.com/Qualifyze/design-system/pull/313) [`cf86580`](https://github.com/Qualifyze/design-system/commit/cf865809322bc4e6e5a969aee1753bccda20e175) Thanks [@BartekQuali](https://github.com/BartekQuali)! - Updated the Tag component to new design spec

## 2.0.4

### Patch Changes

- [#311](https://github.com/Qualifyze/design-system/pull/311) [`01cafcb`](https://github.com/Qualifyze/design-system/commit/01cafcb1fdcee49714a1c170d781fe1fb5671c58) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Modal should allow for more flexible markup

  We noticed that having a `form` in a modal breaks the parent-child
  relationship needed to make the flexbox layout work. This patch should(tm)
  fix the false assumption that `Modal.Body` is always a direct descendant
  of `Modal`.

## 2.0.3

### Patch Changes

- [#309](https://github.com/Qualifyze/design-system/pull/309) [`b287739`](https://github.com/Qualifyze/design-system/commit/b2877390f9f648d7fa48fc0ad82f7aa11040b2bd) Thanks [@phjardas](https://github.com/phjardas)! - Modal: Fix error when child elements are null

## 2.0.2

### Patch Changes

- [#307](https://github.com/Qualifyze/design-system/pull/307) [`ab2c024`](https://github.com/Qualifyze/design-system/commit/ab2c024a926a8012254a0fec422052a1e654e168) Thanks [@phjardas](https://github.com/phjardas)! - LoadingSpinner: change default size to 48px and fix prop types

## 2.0.1

### Patch Changes

- [#284](https://github.com/Qualifyze/design-system/pull/284) [`e7b70a1`](https://github.com/Qualifyze/design-system/commit/e7b70a1d6f6a5a4aa8ea50cb539b2faedf12ed69) Thanks [@phjardas](https://github.com/phjardas)! - Improve layout for modals and sidebars (QC-1883)

## 2.0.0

### Major Changes

- [#293](https://github.com/Qualifyze/design-system/pull/293) [`31daaf6`](https://github.com/Qualifyze/design-system/commit/31daaf673df8a093d4329fd3436c5a5c85130fa1) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Drop IE11 support in layout components in favor of using flexbox's `gap` property. The affected layout components are:

  - `Stack`
  - `Inline`
  - `Tiles`
  - `Columns`

  These will probably just not have any whitespace between their child components in IE11.

* [#237](https://github.com/Qualifyze/design-system/pull/237) [`89e7167`](https://github.com/Qualifyze/design-system/commit/89e7167677c65adbff8b5964a0cdeefb99e7aa9b) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - New `Tooltip` implementation using Radix UI.

  Example usage before:

  ```jsx
  <Box sx={{ p: 3, m: 4 }}>
    <Tooltip
      dataTooltip="I'm a tooltip!"
      indicator="chevronUp"
      variant="default"
    >
      Hover over me to see tooltip
    </Tooltip>
  </Box>
  ```

  Example usage after:

  ```jsx
  <Box sx={{ p: 3, m: 4 }}>
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Text>Hover over me to see tooltip</Text>
      </Tooltip.Trigger>
      <Tooltip.Content sideOffset={5}>
        I'm a tooltip!
        <Tooltip.Arrow offset={10} />
      </Tooltip.Content>
    </Tooltip>
  </Box>
  ```

## 1.11.2

### Patch Changes

- [#300](https://github.com/Qualifyze/design-system/pull/300) [`208966e`](https://github.com/Qualifyze/design-system/commit/208966e4ae0df74360f7e0eb362a26d18fa06673) Thanks [@vubogovich](https://github.com/vubogovich)! - Fix type definition for `TextLinkButton.onClick`.

## 1.11.1

### Patch Changes

- [#297](https://github.com/Qualifyze/design-system/pull/297) [`5566372`](https://github.com/Qualifyze/design-system/commit/5566372273f7a65ccd9317b71ab02e466b403b69) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix `ProgressBar`'s proptypes

* [#299](https://github.com/Qualifyze/design-system/pull/299) [`34bec6a`](https://github.com/Qualifyze/design-system/commit/34bec6a6f280be36f04967de930320ac754ace4b) Thanks [@vubogovich](https://github.com/vubogovich)! - Bugfix: move reach router to dev dependencies as it's used in stories only and not compatible with React v17.

## 1.11.0

### Minor Changes

- [#289](https://github.com/Qualifyze/design-system/pull/289) [`0aa0cf9`](https://github.com/Qualifyze/design-system/commit/0aa0cf9410a3610a8419386abb53174340c741d5) Thanks [@phjardas](https://github.com/phjardas)! - TextLink and TextLinkButton: add tone property

### Patch Changes

- [#291](https://github.com/Qualifyze/design-system/pull/291) [`26853fd`](https://github.com/Qualifyze/design-system/commit/26853fd3032a7314ce78cea7a5a9ce745b2c5f2e) Thanks [@phjardas](https://github.com/phjardas)! - Text: increase contrast for secondary tone.

## 1.10.0

### Minor Changes

- [#285](https://github.com/Qualifyze/design-system/pull/285) [`e8dd7bb`](https://github.com/Qualifyze/design-system/commit/e8dd7bb4e14942d1296210f51108b2aaa5371d6d) Thanks [@phjardas](https://github.com/phjardas)! - New circular scalable loading spinner

## 1.9.2

### Patch Changes

- [#282](https://github.com/Qualifyze/design-system/pull/282) [`db91798`](https://github.com/Qualifyze/design-system/commit/db91798becab9fb145ec6123872e5687ef460bf1) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix styling of `Tabs`

## 1.9.1

### Patch Changes

- [#279](https://github.com/Qualifyze/design-system/pull/279) [`ebe99e7`](https://github.com/Qualifyze/design-system/commit/ebe99e7c1c1d7825e41018de658c170e0c770855) Thanks [@jorgechiapello](https://github.com/jorgechiapello)! - Extended leaking explanation and exmples for Tiles, Inline and Columns

* [#281](https://github.com/Qualifyze/design-system/pull/281) [`bdae62c`](https://github.com/Qualifyze/design-system/commit/bdae62c55a6db44bef260fe99e3abe40b46c777c) Thanks [@falco953](https://github.com/falco953)! - Quickfix: Make close button on Modal always actionable

## 1.9.0

### Minor Changes

- [#278](https://github.com/Qualifyze/design-system/pull/278) [`d26c5ba`](https://github.com/Qualifyze/design-system/commit/d26c5ba7d608ee7e471308f56c44cd8d652bdb25) Thanks [@falco953](https://github.com/falco953)! - Extend Tag component with optional Icon and fix pointer if clickable

### Patch Changes

- [#276](https://github.com/Qualifyze/design-system/pull/276) [`921bdeb`](https://github.com/Qualifyze/design-system/commit/921bdeb28bb547764f31152e6b1ec9d4247ed8d9) Thanks [@jorgechiapello](https://github.com/jorgechiapello)! - Add explanation and example about Stack component leaking

## 1.7.2

### Patch Changes

- [#274](https://github.com/Qualifyze/design-system/pull/274) [`baac7bf`](https://github.com/Qualifyze/design-system/commit/baac7bf2fe1b9da6aea527cfeb0c10f084469a45) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Fix the console error on the as sidebar prop

* [#270](https://github.com/Qualifyze/design-system/pull/270) [`8d95a4d`](https://github.com/Qualifyze/design-system/commit/8d95a4d4b82906152db8d6f9a055cc9e8745ce87) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix CSS stacking context for several layout components

  The following components were "leaking" (layout-wise speaking) into adjacent components. We use negative margins for all of them, which resulted in adjacent interactive components (e.g., buttons) not being clickable because these components were overlapping with the buttons. This release fixes that by making sure all layout components use `position: static` to avoid creating a new CSS stacking context for them.

  The affected components are: `Stack`, `Inline`, `Column(s)`, and `Tiles`.

## 1.7.1

### Patch Changes

- [#271](https://github.com/Qualifyze/design-system/pull/271) [`f964148`](https://github.com/Qualifyze/design-system/commit/f964148cc1f649e518829537fc37de6cd011d4e3) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Update the spacing in the side bar modal

## 1.7.0

### Minor Changes

- [#267](https://github.com/Qualifyze/design-system/pull/267) [`262c0b3`](https://github.com/Qualifyze/design-system/commit/262c0b3a6653a3b456ce7c6dbf820eb6eb475fb9) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Add a new type of modal, the side bar

## 1.6.7

### Patch Changes

- [#263](https://github.com/Qualifyze/design-system/pull/263) [`4c2cfc1`](https://github.com/Qualifyze/design-system/commit/4c2cfc12b04d7a290856e86d167945523028cbdc) Thanks [@falco953](https://github.com/falco953)! - Quickfix: Allow type date for `TextField`

* [#265](https://github.com/Qualifyze/design-system/pull/265) [`1cd7521`](https://github.com/Qualifyze/design-system/commit/1cd75214ad0c336a389beba2c0e9c229cc12a4c1) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Add docs about having to include global this when using the DS

## 1.6.6

### Patch Changes

- [#261](https://github.com/Qualifyze/design-system/pull/261) [`7a77bc9`](https://github.com/Qualifyze/design-system/commit/7a77bc9aa3c94d473876914b8f13dc6d2b5bac1b) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Update the package lock

## 1.6.5

### Patch Changes

- [#259](https://github.com/Qualifyze/design-system/pull/259) [`b3939a7`](https://github.com/Qualifyze/design-system/commit/b3939a77ba3f1ecc739e7d0a2ae077ec8f00831e) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix shadows of `DropdownMenu`

## 1.6.4

### Patch Changes

- [#256](https://github.com/Qualifyze/design-system/pull/256) [`2e275d9`](https://github.com/Qualifyze/design-system/commit/2e275d98b953fe1612ac47c024b8b49da40dc4f0) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Focus on checkbox label was not correct with introduction of additional text

## 1.6.3

### Patch Changes

- [#254](https://github.com/Qualifyze/design-system/pull/254) [`a04cb63`](https://github.com/Qualifyze/design-system/commit/a04cb630c26b80afb48bb6028e639b0b18bc1d13) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Make the for prop optional on checkboxes

## 1.6.2

### Patch Changes

- [#251](https://github.com/Qualifyze/design-system/pull/251) [`2ea8509`](https://github.com/Qualifyze/design-system/commit/2ea850977bca1fe51e916c39f3d5fb21f6f0847e) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Better multi line support for checkbox

## 1.6.1

### Patch Changes

- [#249](https://github.com/Qualifyze/design-system/pull/249) [`ce22186`](https://github.com/Qualifyze/design-system/commit/ce221863485aabe7e6383dbd9f60c5a6024d951d) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Add min width for the checkbox so it does not break with long text

## 1.6.0

### Minor Changes

- [#245](https://github.com/Qualifyze/design-system/pull/245) [`7fd9097`](https://github.com/Qualifyze/design-system/commit/7fd909755f6b6beefb0a917ab5d9b5f5400f8f2b) Thanks [@jorgechiapello](https://github.com/jorgechiapello)! - Add Tabs component

## 1.5.1

### Patch Changes

- [#242](https://github.com/Qualifyze/design-system/pull/242) [`313f8e5`](https://github.com/Qualifyze/design-system/commit/313f8e5b0b08a46b7890f6d832d96975ed3c68cd) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Export `VisuallyHidden`

## 1.5.0

### Minor Changes

- [#239](https://github.com/Qualifyze/design-system/pull/239) [`cc17368`](https://github.com/Qualifyze/design-system/commit/cc173685814f49007a5bc2aa5577a4bf95b4cba3) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add VisuallyHidden component

### Patch Changes

- [#238](https://github.com/Qualifyze/design-system/pull/238) [`0e4fe61`](https://github.com/Qualifyze/design-system/commit/0e4fe613a2b895032679c4dfa6e257237f9cafab) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Do not use `<strong>` inside form labels

* [#234](https://github.com/Qualifyze/design-system/pull/234) [`e362d26`](https://github.com/Qualifyze/design-system/commit/e362d2659e7f404a807293d5f39e1535a42709a2) Thanks [@falco953](https://github.com/falco953)! - Add word break on FileRow component

## 1.4.7

### Patch Changes

- [#230](https://github.com/Qualifyze/design-system/pull/230) [`b719980`](https://github.com/Qualifyze/design-system/commit/b719980a30cb541381be0193c58d83abfd0cf4a3) Thanks [@falco953](https://github.com/falco953)! - Set text color on FileRow to default text color

* [#232](https://github.com/Qualifyze/design-system/pull/232) [`92b720b`](https://github.com/Qualifyze/design-system/commit/92b720b79c7355d9bb1bbd117ad5001b6bca067d) Thanks [@falco953](https://github.com/falco953)! - Improve FileRow styling

## 1.4.6

### Patch Changes

- [#228](https://github.com/Qualifyze/design-system/pull/228) [`639bccd`](https://github.com/Qualifyze/design-system/commit/639bccd40f9fdab18b733f1b3de7367a253323a3) Thanks [@falco953](https://github.com/falco953)! - Fix broken modal

## 1.4.5

### Patch Changes

- [#225](https://github.com/Qualifyze/design-system/pull/225) [`5173fe5`](https://github.com/Qualifyze/design-system/commit/5173fe5e202cfbe5482b1ad4ea42626c23a81f78) Thanks [@falco953](https://github.com/falco953)! - This adds the capability of displaying errors to the FileRow component and uses this component in the File component of the FileUpload.

* [#224](https://github.com/Qualifyze/design-system/pull/224) [`3c75f5e`](https://github.com/Qualifyze/design-system/commit/3c75f5edf6d7d96caa66bbbca6d267c80285da1a) Thanks [@falco953](https://github.com/falco953)! - This changes the cursor of the Text on a FileRow component to be the default pointer.

- [#227](https://github.com/Qualifyze/design-system/pull/227) [`16d634d`](https://github.com/Qualifyze/design-system/commit/16d634dc8a0f3142cb28a70d51625e53765e098c) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add `DangerAction` to `FileRow`

* [#220](https://github.com/Qualifyze/design-system/pull/220) [`52a016c`](https://github.com/Qualifyze/design-system/commit/52a016c9b48309718566924f7d2ea3898cda4f87) Thanks [@falco953](https://github.com/falco953)! - Resolve console warnings on modal component

- [#219](https://github.com/Qualifyze/design-system/pull/219) [`8d1bdeb`](https://github.com/Qualifyze/design-system/commit/8d1bdeb460d2b9ce19db561793a72f304da59c8f) Thanks [@phjardas](https://github.com/phjardas)! - Autosuggest: react to external changes of the field value

## 1.4.4

### Patch Changes

- [#217](https://github.com/Qualifyze/design-system/pull/217) [`6eb78a9`](https://github.com/Qualifyze/design-system/commit/6eb78a9e27a03ce774ce6eb3825bdf4a4ed33306) Thanks [@phjardas](https://github.com/phjardas)! - AutosuggestField: enable setting of initial value

## 1.4.3

### Patch Changes

- [#214](https://github.com/Qualifyze/design-system/pull/214) [`5b28a34`](https://github.com/Qualifyze/design-system/commit/5b28a34b387c096a7f609851c0c4867f1aff4bea) Thanks [@sirJiggles](https://github.com/sirJiggles)! - Padding and usage change for the navigation

* [#216](https://github.com/Qualifyze/design-system/pull/216) [`bfa07d9`](https://github.com/Qualifyze/design-system/commit/bfa07d9d86a09b0452a501718205ac15cb9b32ae) Thanks [@phjardas](https://github.com/phjardas)! - AppBar: fix production build

## 1.4.2

### Patch Changes

- [#212](https://github.com/Qualifyze/design-system/pull/212) [`9ec6901`](https://github.com/Qualifyze/design-system/commit/9ec690104704f81f4733045218ad8dc41816313a) Thanks [@phjardas](https://github.com/phjardas)! - AppBar: fix padding for actions when there is no secondary nav

* [#211](https://github.com/Qualifyze/design-system/pull/211) [`5e3e607`](https://github.com/Qualifyze/design-system/commit/5e3e60733759c0b089d32dfa6c5f322ed45928ac) Thanks [@phjardas](https://github.com/phjardas)! - AppBar: fix an error with the handling of children

- [#189](https://github.com/Qualifyze/design-system/pull/189) [`a1c053c`](https://github.com/Qualifyze/design-system/commit/a1c053cced542e28eec31d53d61f1ee53daa89e5) Thanks [@phjardas](https://github.com/phjardas)! - Logo: allow string values for width and height

## 1.4.1

### Patch Changes

- [#209](https://github.com/Qualifyze/design-system/pull/209) [`c2d8c4b`](https://github.com/Qualifyze/design-system/commit/c2d8c4bd7d80fca07add64b7b68a7729c6fbeeeb) Thanks [@phjardas](https://github.com/phjardas)! - AppBar: fix error when passing null children

## 1.4.0

### Minor Changes

- [#194](https://github.com/Qualifyze/design-system/pull/194) [`f5da4b7`](https://github.com/Qualifyze/design-system/commit/f5da4b7820785999136bbfcf02a0c2140fc66258) Thanks [@phjardas](https://github.com/phjardas)! - Add new components: AppBar and Menu (QC-1275)

## 1.3.2

### Patch Changes

- [#204](https://github.com/Qualifyze/design-system/pull/204) [`4d01a7c`](https://github.com/Qualifyze/design-system/commit/4d01a7cbd4ceb0fb54b5123da7dd824bbffa1929) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Disable `TextLinkButton` when `isLoading` prop is `true`

## 1.3.1

### Patch Changes

- [#203](https://github.com/Qualifyze/design-system/pull/203) [`b22ab35`](https://github.com/Qualifyze/design-system/commit/b22ab35609c6f4d5c1ac2df75b90ecf852da576e) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix missing keypress handlers on `TextLinkButton`

* [#201](https://github.com/Qualifyze/design-system/pull/201) [`00ff384`](https://github.com/Qualifyze/design-system/commit/00ff384a5856fd2b539e3557ff81add76bd06212) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add story for `isLoading` prop on `TextLinkButton`

## 1.3.0

### Minor Changes

- [#199](https://github.com/Qualifyze/design-system/pull/199) [`fc795c8`](https://github.com/Qualifyze/design-system/commit/fc795c890cb03d30774f301b63ad6a6aad9f6b53) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - New component: `DropdownMenu`

## 1.2.12

### Patch Changes

- [#191](https://github.com/Qualifyze/design-system/pull/191) [`fe67ee1`](https://github.com/Qualifyze/design-system/commit/fe67ee1819eb7f3c4452842c6ea7c972bcd5e659) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add `Icon` to `TextLinkButton`

## 1.2.11

### Patch Changes

- [#180](https://github.com/Qualifyze/design-system/pull/180) [`88fe28d`](https://github.com/Qualifyze/design-system/commit/88fe28d4af0099702710740612a47d2a0f5b5349) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Prevent undesired focus styles when using a mouse

* [#179](https://github.com/Qualifyze/design-system/pull/179) [`2bc9679`](https://github.com/Qualifyze/design-system/commit/2bc9679f9a7b880e7066d5088a7f3fb9731c7b47) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Fix issues with TextLinkButton introduced in v1.2.9 (PR #176) and v1.2.8 (PR #177).

## 1.2.10

### Patch Changes

- [#177](https://github.com/Qualifyze/design-system/pull/177) [`2e709a2`](https://github.com/Qualifyze/design-system/commit/2e709a248a0e2e477f7ca114681a673164790023) Thanks [@jorgechiapello](https://github.com/jorgechiapello)! - Make TextLinkButton loading state to work properly when nested inside of an Actions component

## 1.2.9

### Patch Changes

- [#176](https://github.com/Qualifyze/design-system/pull/176) [`2038da4`](https://github.com/Qualifyze/design-system/commit/2038da48f19c799f1d1e376e0f394c443476c363) Thanks [@jorgechiapello](https://github.com/jorgechiapello)! - A visual queue for progress in the TextLinkButton

* [#172](https://github.com/Qualifyze/design-system/pull/172) [`70adebf`](https://github.com/Qualifyze/design-system/commit/70adebf65c75139e486cc0a7f3091691c2de5964) Thanks [@vubogovich](https://github.com/vubogovich)! - Restore `Icon` tone so it's used when the color is not provided.
  The `color` prop is kept for backward compatibility, please use `tone` instead.

## 1.2.8

### Patch Changes

- [#168](https://github.com/Qualifyze/design-system/pull/168) [`8e5b1e9`](https://github.com/Qualifyze/design-system/commit/8e5b1e94cd287eb59514c947bb7993e5cfa63cc1) Thanks [@vubogovich](https://github.com/vubogovich)! - Add missing exports for FileBox and Strong, remove the file with duplicated and unused exports.

## 1.2.7

### Patch Changes

- [#164](https://github.com/Qualifyze/design-system/pull/164) [`1a47037`](https://github.com/Qualifyze/design-system/commit/1a47037ea35470335cd05b75012702988de7097b) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add missing `corejs` dependency

## 1.2.6

### Patch Changes

- [#160](https://github.com/Qualifyze/design-system/pull/160) [`967c1e5`](https://github.com/Qualifyze/design-system/commit/967c1e53459044b778af830289b06ea272dc5324) Thanks [@vubogovich](https://github.com/vubogovich)! - Support array validators for multi-select field value.

## 1.2.5

### Patch Changes

- [#148](https://github.com/Qualifyze/design-system/pull/148) [`35c388c`](https://github.com/Qualifyze/design-system/commit/35c388ce8da70186ae4b5f49e837120e8ee7a34f) Thanks [@vubogovich](https://github.com/vubogovich)! - Allow customization of new option object, option label in menu and solve issue
  with blinking creation option.

## 1.2.4

### Patch Changes

- [#149](https://github.com/Qualifyze/design-system/pull/149) [`ac4439f`](https://github.com/Qualifyze/design-system/commit/ac4439f2ef1ab0e4b5a734f26d0b2f99d8a22600) Thanks [@vubogovich](https://github.com/vubogovich)! - Fix ES module generation, exclude tests and stories from the library artifacts.

## 1.2.3

### Patch Changes

- [#154](https://github.com/Qualifyze/design-system/pull/154) [`26682bf`](https://github.com/Qualifyze/design-system/commit/26682bf60ce65cb647f192074327ec01de84bc1f) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add `secondaryLabel` and `tertiaryLabel` to all form fields

## 1.2.2

### Patch Changes

- [#147](https://github.com/Qualifyze/design-system/pull/147) [`f4a1e22`](https://github.com/Qualifyze/design-system/commit/f4a1e22e785e39f53bb77c4955472af9857d927f) Thanks [@vubogovich](https://github.com/vubogovich)! - Set text color for select and text fields explicitly

* [#145](https://github.com/Qualifyze/design-system/pull/145) [`7bed9ed`](https://github.com/Qualifyze/design-system/commit/7bed9edb113ca58ca4b00a2d5c1867f4c8883ac7) Thanks [@gregoralbrecht](https://github.com/gregoralbrecht)! - Add missing `message` prop to `SelectField`
