const revealItems = document.querySelectorAll('.reveal');
const skillBars = document.querySelectorAll('.bar > span');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const skillsSection = document.getElementById('competenze');
if (skillsSection && skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillBars.forEach((bar) => {
                        const level = bar.getAttribute('data-level') || '0';
                        bar.style.width = level + '%';
                    });
                    skillsObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    skillsObserver.observe(skillsSection);
}


