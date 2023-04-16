export default interface MyProviderContext {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean | ((prevState: boolean) => boolean)) => void;
}
