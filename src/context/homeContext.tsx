// HomeContext.tsx
import React, { createContext, useState, useContext } from "react";

interface HomeContextType {
    isResumeDialogueOpen: boolean;
    setIsResumeDialogueOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeContext = createContext<HomeContextType>({
    isResumeDialogueOpen: false,
    setIsResumeDialogueOpen: () => {},
});

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: any) => {
    const [isResumeDialogueOpen, setIsResumeDialogueOpen] =
        useState<boolean>(false);

    return (
        <HomeContext.Provider
            value={{ isResumeDialogueOpen, setIsResumeDialogueOpen }}
        >
            {children}
        </HomeContext.Provider>
    );
};
