// PawLoader.jsx
import { LeftPaw } from '../assets/images/svg/LeftPaw';
import { RightPaw } from '../assets/images/svg/RightPaw';

const PawLoader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center justify-center z-50">
            <div className="relative w-40 h-40 mb-8">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-spin-slow">
                    <LeftPaw />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-spin-slow-reverse">
                    <RightPaw />
                </div>                
            </div>

            
        </div>
    );
};

const style = document.createElement('style');
style.textContent = `
    @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes spin-slow-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
        50% { transform: translateY(-20px) rotate(10deg); opacity: 0.3; }
        100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
    }
    .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
    }
    .animate-spin-slow-reverse {
        animation: spin-slow-reverse 3s linear infinite;
    }
    .animate-float {
        animation: float 5s ease-in-out infinite;
    }
    .delay-100 {
        animation-delay: 0.1s;
    }
    .delay-200 {
        animation-delay: 0.2s;
    }
`;
document.head.appendChild(style);

export default PawLoader;