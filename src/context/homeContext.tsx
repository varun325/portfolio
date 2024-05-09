// HomeContext.tsx
import React, { createContext, useState, useContext, useMemo } from "react";

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
    const contextValue = useMemo(() => {
        return { isResumeDialogueOpen, setIsResumeDialogueOpen };
    }, [isResumeDialogueOpen, setIsResumeDialogueOpen]);

    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    );
};
