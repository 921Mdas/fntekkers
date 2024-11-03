import { create } from "zustand";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStore = create((set) => ({
 tl:null,
}));

export default useStore;
