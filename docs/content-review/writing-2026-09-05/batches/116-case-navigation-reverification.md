# Mobile case navigation rechecked

Verified 14.09.2026. The September 12 handoff carried an older report that a later selected subtype remained outside the visible mobile strip. This recheck closes that recorded question without another production change.

Copernicus read the complete navigation component and tests. The existing `ScrollableCaseNavigation` effect already reveals the active route on mount and route changes, and observes both the container and active item with `ResizeObserver`. It scrolls only the horizontal container. Batch 26 and commit `417152c` already recorded the original fix. Root also read the complete component and tests.

Root verified the current site in Chromium at 360×800. Direct loading of `/cases/family` reveals Rodzina at horizontal coordinates 258.20–335.28, with container scrollLeft 207. Direct loading of `/cases/other` reveals Інші цілі at 255.28–334.58, with scrollLeft 287. The navigation viewport spans 9–351. Clicking Rodzina and returning with browser Back restores the selected Інші цілі and its visible position. Switching from 1440×1000 to 360×800 preserves document scrollY 700 and reveals the active item. Document width remains 360.

The initial development startup rebuilt optimized dependencies and briefly reported missing obsolete dependency chunks. An early observation before the client finished initializing showed the server-rendered strip at scrollLeft zero. After dependencies settled, direct loads with the active-item visibility condition, route navigation and resize passed. This was not used as evidence to rewrite working navigation. The final browser error log was empty. Root inspected `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789387855175.png`.

The existing two navigation tests passed. They verify URL selection, browser-history selection and family/subtype consistency; the geometry evidence above comes from the browser, not these tests. No new test, production edit or legal-content acceptance is claimed. Log: `.reference/batch116-navigation-tests.log`.
