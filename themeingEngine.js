import { cookies } from "next/headers";
import { baseData, navbarData, heroData, projectsSectionData } from "./data";

function getThemeName(themeNameValue) {
  const cookeStore = cookies();
  const themeName = cookeStore.get(themeNameValue)?.value;
  return themeName;
}

function baseThemeingEngine() {
  let newBaseData = baseData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newBaseData = baseData[themeName] || newBaseData;
  }

  return newBaseData;
}

function navbarThemeingEngine() {
  let newNavbarData = navbarData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newNavbarData = navbarData[themeName] || newNavbarData;
  }

  return newNavbarData;
}

function heroThemeingEngine() {
  let newHeroData = heroData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newHeroData = heroData[themeName] || newHeroData;
  }

  return newHeroData;
}

function projectSectionThemeingEngine() {
  let newProjectSectionData = projectsSectionData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newProjectSectionData =
      projectsSectionData[themeName] || newProjectSectionData;
  }

  return newProjectSectionData;
}

export {
  baseThemeingEngine,
  navbarThemeingEngine,
  heroThemeingEngine,
  projectSectionThemeingEngine,
};
