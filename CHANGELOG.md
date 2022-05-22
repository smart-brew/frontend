#### 2.0.1 (2022-05-22)

##### Chores

*  generate changelog (07bea308)

##### New Features

* **SB-170:**  update gui to support new relay modules (0d7e1e4a)

##### Bug Fixes

* **SB-170:**  update mock data (39d100f8)

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

#### 1.0.0 (2022-05-22)

##### Bug Fixes

* **SB-128:**  start brew api fix (68774b80)
* **SB-123:**  default selected recipe = 0 (4b9f7aa3)
* **SB-137:**
  *  close popup and reload page after deleting recipe of other (4d1570ee)
  *  change page after abort and pause (9406b3fb)
* **SB-138:**  add secondary and cancel button and fixed styling (caf33245)
* **SB-122:**  added redrawing instructions, values arent shown (998e9ee2)
* **SB-125:**  comments and naming (978a1a8a)
* **SB-82:**
  *  finish navigating between pages (202c85f7)
  *  remove unused vars (c2a47a13)
  *  Form and recipe picking gui remade (1c357255)
  *  recipeList fix (c97a22b9)
* **SB-108:**
  *  link menu highlight (9a000027)
  *  show correct selected menu when location changed from another place in app apart from menu (d0d3d5e1)
* **SB-87:**
  *  tailwind class styles (df173f05)
  *  all eslint problems (a52a5d09)
* **SB-89:**
  *  form with ingredients divided into categories (29dc0ed6)
  *  main merge changes (d665a695)
* **SB-90:**
  *  more eslint problems v3 (d85d137d)
  *  more eslint problems v2 (22a6a9a7)
  *  more eslint problems (cb354790)
* **SB-71:**
  *  eslint rule for params (6b4d10c4)
  *  resolve all eslint problems (9c9f003e)
* **SB-59:**
  *  merged with main branch (29d982ee)
  *  Eslint and prettier fix, go to recepe page (3e01e169)
* **SB-66:**
  *  exclude v4 (74c82a4e)
  *  exclude v3 (e5313bad)
  *  exclude v2 (75919483)
  *  exclude (24d7b353)
  *  build in cloud - fix dir names (aa455ce7)
  *  build in cloud - env (6334f723)
  *  build in cloud - missing checkout (f5f20494)
  *  build in cloud, because raspberry was out of memory (15cd518a)
  *  conditional instruction rendering + block (ad045e11)
  *  update UnitsMap (4ed3c858)
* **SB-26:**  update auto deploy to use ssh (dc6a4007)
* **SB-7:**  frontend restart always (4858bcf8)
* **SB-16:**  folder name (17f78bca)

##### Other Changes

* **SB-128:**  handle manual instruction; without test (87e5a0f9)
* **SB-146:**
  *  added formatting to current instruction (50d5bbc3)
  *  added formatting to current instruction (0d6efae1)
* **SB-136:**  Added recipe delete (8e450651)
* **SB-137:**
  *  popup is called from function (e16eab99)
  *  created functional popup using context (07379128)
  *  made popup much simpler to use (20a0ed06)
  *  merged with main (1fc37d76)
  *  popups in one component, abort changed (dd29a2ba)
  *  work on popups, component made (4f2f8f81)
* **SB-122:**
  *  Brewing process instructions (be7ea1c8)
  *  Merge branch 'main' into brewing-process-instructions (22dd8a87)
  *  current instruction status now coloured (dc5acdaf)
  *  recipe overview divided into blocks (0fe79ccd)
  *  preview instructions now show correct name instead of code name (1c14622f)
  *  instructions now show saved parameters (9e5a4847)
  *  merged with main (987e9e7b)
  *  without redrawing instructions (0d12881b)
* **SB-126:**  added api endpoints (and SB-127, SB-128) (abf21cda)
* **SB-135:**  instructions page sidebar added (741b1e09)
* **SB-123:**  api types and working create recipe with BE (a586407d)
* **SB-125:**
  *  updated types for instructionsAPI (aad1a3de)
  *  fetching templates and showing unfinished instructions (c0c7b62a)
  *  fix types and add igredients to recipe progress (c84c5f42)
  *  created SplitPage componet and fixed styling (9b88668a)
* **SB-88:**
  *  load recipe and start brewing endpoints (58bf7563)
  *  update brew page with ability to start brewing - popup window with instruction before the brewing starts (d0f4446c)
* **SB-82:**
  *  create recipe endpoint (6e2ea275)
  *  can choose recipe and select to start brewing (c21fcc5f)
  *  can choose recipe and select to start brewing (273a0bd5)
  *  merged with the menu (09abd2b4)
  *  send recipeId to the mainpage (260ced73)
  *  Work on side panel and checking form state (35ec3142)
  *  Work on the side panel (bf87c3a0)
  *  Store form data in main recipe page (d9a0a674)
  *  functionType added (e95b1865)
* **SB-90:**
  *  creating instructions for recipe (a0ce0b05)
  *  can delete instructions and blocks (0b328826)
  *  working recipe building (43a13ada)
  *  can add instructions and blocks (c5938240)
  *  Switched types for recipe building + recipe building working with instruction templates now (e538a826)
  *  added all editable instructions (27147177)
  *  added type for JSON message format FE --> BE (e1156718)
  *  first version of temperature editable instruction body (959f4d04)
  *  split data into more files (f0900327)
  *  started working on editable instructions listing (a92ed2ad)
  *  modal window with working instruction picking (bd14ba46)
  *  started working on popup (01497b38)
  *  started working on popup (56666223)
* **SB-87:**
  *  list of recipes shows locked status (53281267)
  *  recipe page loads recipes from DB (21a19424)
  *  overview page can show preview of loaded recipe (22d04977)
  *  split recipe sidebar into smaller files (8ad5cb83)
  *  created custom button (e70a5cc3)
  *  moved recipe with ingredients into seperate file and fixed many eslint warnings (4ebbdf8b)
  *  add /recipe and /recipe/:id endpoint (1d32fc2e)
  *  changed border to use shadow for better modern look (82542eb3)
  *  change router and pages file location (53904b0a)
  *  Picking recipes page without showing instructions (cabc3d44)
* **SB-108:**  create menubar with off button and simplify navigation (8dea50f6)
* //github.com/smart-brew/frontend into main (33826310)
* **SB-100:**  easier startup using docker (20fbf0ac)
* **SB-89:**  Recipe ingredients list (ef574c24)
* **SB-86:**  data endpoint (681df5ee)
* **SB-71:**
  *  auto format on commit (354883b7)
  *  auto format and fix all files (481e9964)
  *  eslint, prettier, editorconfig (579389a5)
  *  eslint, prettier, editorconfig (71de996a)
* **SB-50:**
  *  update to the data endpoint (462f11b3)
  *  data endpoint (3239581c)
* **SB-66:**
  *  ignore linguist Tailwind main.css (a26af515)
  *  added active/inactive block states (40da33c3)
  *  added scrollable recipe sidebar (9f029f31)
  *  auto deploy using new docker (56f2357d)
  *  added tailwind + instruction component + bunch of helpers (d88d8bd1)
* **SB-59:**
  *  merged with main branch (1fb9b06a)
  *  Basic chamber information on home page (5a117a06)
  *  components before JSON format changes (39ccc21c)
  *  added new layout components for homepage (73482adb)
  *  added context, to use for fetching all data (d14be5e4)
  *  added context, to use for fetching all data (d3f471fd)
* **SB-67:**  add update to commit message validation (1770ddeb)
* **SB-65:**
  *  offline fallback page (f3419327)
  *  offline fallback page (4ccd6ec8)
* **SB-41:**  Add temporary image to home page (8a8bbdb7)
* **SB-7:**
  *  updated readme - docker (b52a7fd1)
  *  update actions to use docker (48a7432a)
  *  initial docker config (a12b89d1)
* **SB-16:**
  *   automatic script execution on RPI after main branch updates (a179239b)
  *  init repository (f21ae7ad)

