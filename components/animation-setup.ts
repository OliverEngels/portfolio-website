const ease = [0, 0.11, 0.15, 1.05];
const duration = .62;

export const container = {
    initial: { 
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: duration,
            ease: ease
        }
    },
    exit: { 
        opacity: 0,  
        y: 25, 
        transition: {
            duration: duration,
            ease: ease
        }
    },
}

export const item = {
    initial: { 
        opacity: 0,  
        y: 25 
    },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: duration,
            ease: ease
        }
    },
    exit: { 
        opacity: 0, 
        transition: {
            duration: duration,
            ease: ease
        }
    },
}