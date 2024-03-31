import React, { useEffect } from 'react';

const Confetti: React.FC<{ active: boolean }> = ({ active }) => {
    useEffect(() => {
        if (active) {
            burstConfetti();
        }
    }, [active]);

    const burstConfetti = () => {
        const confettiCount = 2500;
        const confettiElement = document.createElement('div');
        confettiElement.style.position = 'fixed';
        confettiElement.style.width = '100vw';
        confettiElement.style.height = '100vh';
        confettiElement.style.top = '0px';
        confettiElement.style.zIndex = '9999';
        confettiElement.style.pointerEvents = 'none';
        document.body.appendChild(confettiElement);

        for (let i = 0; i < confettiCount; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.style.width = '10px';
            confettiPiece.style.height = `${Math.random() * 20 - 10}px`;
            confettiPiece.style.position = 'absolute';
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiPiece.style.opacity = "1";
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.top = `-${Math.random() * 400 + 20}px`;
            confettiElement.appendChild(confettiPiece);

            const animation = confettiPiece.animate([
                { transform: `translate3d(0,0,0)`, opacity: 1 },
                { transform: `translate3d(${Math.random() * 200 - 100}vw,${Math.random() * 100 + 100}vh,0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 3000,
                easing: 'linear',
                delay: Math.random() * 1000
            });

            animation.onfinish = () => confettiPiece.remove();
        }

        setTimeout(() => confettiElement.remove(), 8000);
    };

    return null;
};

export default Confetti;
