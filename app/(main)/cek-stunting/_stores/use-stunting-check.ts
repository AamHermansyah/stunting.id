import { BabyInformation, RowCSVStuntingCheck, StuntingStatus } from '@/types';
import { create } from 'zustand';

type stuntingInformation = RowCSVStuntingCheck & {
  result: string;
  weight: number;
  status: StuntingStatus;
}

type Results = {
  BBU: stuntingInformation;
}

interface StuntingCheckState {
  results: null | Results;
  baby: null | BabyInformation;
  setResults: (results: null | Results) => void;
  setBaby: (baby: null | BabyInformation) => void;
}

const useStuntingCheck = create<StuntingCheckState>((set) => {
  return ({
    results: null,
    baby: null,
    setResults: (results) => {
      set({ results });
    },
    setBaby: (data) => {
      set({ baby: data });
    },
  })
});

export default useStuntingCheck;
