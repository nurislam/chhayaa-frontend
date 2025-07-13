"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { MouseMoveProvider } from "@/contexts/mouse-move-context";
import Theme from "@/components/common/theme";
import TanstackProvider from "@/provider/tanstackProvider";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light">
        <MouseMoveProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </MouseMoveProvider>
        <Theme />
      </ThemeProvider>
    </Provider>
  );
}
