import BlurText from '../components/ui/BlurText';

function HomePage() {
    const handleAnimationComplete = () => {
        console.log('Animation complete!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-8">
            <div className="text-center max-w-4xl">
                <BlurText
                    text="Hello, I'm Ziad"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="font-display text-6xl font-bold text-white mb-6"
                />

                <BlurText
                    text="The best web developer"
                    delay={400}
                    animateBy="words"
                    direction="top"
                    className="font-sans text-xl text-gray-400"
                />
            </div>
        </div>
    );
}

export default HomePage;