import { create } from 'zustand'

interface PlanStoreTypes{
  fModalShowing:boolean,
  setFModalShowing: (bool:boolean) => void,
}

const usePlanStore = create<PlanStoreTypes>((set) => ({
	fModalShowing:false,
    setFModalShowing: (bool:boolean) => set(( ) => ({ fModalShowing:bool})),
}))

export default usePlanStore;