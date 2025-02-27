'use client';
import { Provider } from "react-redux";
import { store } from "../Store/store";
import ThemeProvider from "../Provider/themeProvider";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}