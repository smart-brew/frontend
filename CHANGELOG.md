#### 2.0.0 (2022-05-19)

##### Chores

*  add check to commits (cd3deb52)
* **deps:**
  *  bump nanoid from 3.1.30 to 3.3.1 (#41) (ae24c529)
  *  bump url-parse from 1.5.3 to 1.5.10 (#39) (504f917f)
  *  bump minimist from 1.2.5 to 1.2.6 (#38) (8750ab32)
* **SB-227:**  migrate to vite (e348e752)
* **SB-149:**  better organize file structure (b8c54726)

##### New Features

* **SB-311:**  retry reseting error state (ba381373)
* **SB-244:**  allow user to go back to recipes when editing via back button (#59) (73655bfd)
* **SB-289:**  added error message, when BE is not reachable (#58) (d3f92fe2)
* **SB-265, SB-266:**  heading and instruction history (#53) (e2119857)
* **SB-243:**  make popups more customizable (58114879)
* **SB-263:**  create test for start brewing (#46) (cf6e7612)
* **SB-264:**  navigation between two subpages history (99f78a73)

##### Bug Fixes

* **SB-298:**
  *  brewing, pause and abort working event after the page is changed (#60) (d0a0e172)
  *  fixed input field when adding new motor instruction (bfc1ae71)
* **SB-307:**  add enabled state to motor overview (da07d159)
* **SB-274, SB-271, SB-272:**  recipe creating conditions, basic param setting motor/temp, spaces around recipe name (#52) (e4c16450)
* **SB-258:**  Send recipeId when starting brewing process to the backend (478443e9)
* **SB-233, SB-237, SB-137:**  while brewing permissions fixed, resume brewing option added (#43) (ddaa7f52)
* **SB-235:**  emty states overview page and better api definitions (#45) (c60614d5)
* **SB-220:**  mock data for functions (defe53ec)
* **SB-234, SB-236, SB-232:**  visual bug fixes (#42) (28b5c9e3)
* **SB-238:**
  *  changed "nasypnik" to english (f0ae74dc)
  *  Names to english on overview page (38dfa6cd)
* **SB-216:**  Transition from overview page to any other looses context (#37) (724dcea3)
* **SB-156:**
  *  fix scrollbars (#34) (f8b8408d)
  *  scroll overflow on list of all recipes (ccb6bbde)
  *  scroll overflow on recipe page (32cbbf85)
* **SB-182:**
  *  requested changes done (hopefully) (831a4d9b)
  *  empty block name check (035c538f)
* **SB-171:**  codename not existing (72226686)
* **SB-149:**
  *  update start command (b5021d65)
  *  remove unused (e807c934)
  *  moved svg (285cab33)
* **SB-162:**  start brewing fixed (30d8eece)

##### Other Changes

* **SB-286:**  extreme cases (#57) (59f391b9)
* **SB-287:**  Export PDF from history stats page (#56) (3762f996)
* **SB-277:**  create test for pausing recipe (#51) (e67c2bcb)
* **SB-299:**
  *  fixed eslint errors (a5668207)
  *  fixed block name splitting and added IIT.SRC hotfixes (8df1fa34)
* **SB-273:**
  *  eslint error fix (786376b4)
  *  added handling response on start brewing + indicate finish brewing (5e2aedfd)
* **SB-257:**  show brewing stats with graphs (#50) (0eaf54bb)
* **SB-252:**  add brewing history side bar (#48) (3741998b)
* **SB-247:**  expose types for FE (ab321b30)
* **SB-220:**  instruction tester (#44) (cb6d57ec)
* **SB-204:**  initial cypress setup (e1d7f8ad)
* **SB-189:**  edit page (#36) (5ee4a602)
* **SB-197:**  update style to be uniform and accessible across entire system on touch display (#35) (5fdf57dc)
* **SB-171:**
  *  fix existing bugs + edit CSS (614b0ce0)
  *  added responsive positioning of boxes (8c956694)
  *  finished positioning of module bubbles (6b1c8f27)
  *  positioned bubbles for each chamber + formatting for temperature (0f18433d)
  *  positioned bubbles for each chamber + formatting for temperature (f2cf4b13)
  *  Components for each bubble, without right placement and design (50cc3cca)
* **SB-182:**
  *  added block name check (4e189613)
  *  without block name check (62d7cab6)
* **SB-149:**  added more button styles (f93e4beb)
* **SB-123:**  cleaup code and remove unused files (707035d4)

