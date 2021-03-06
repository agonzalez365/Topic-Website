const resourcesData = {
    infoLinks: [
        {
            text: 'Need To Smile Today?',
            link: 'https://www.youtube.com/watch?v=xGX3cd2eEgY'
        },
        {
            text: 'How To Promote Your Own Mental Health',
            link: 'https://uhs.umich.edu/tenthings'
        },
        {
            text: 'What Is A Mental Illness?',
            link: 'https://www.nimh.nih.gov/health/statistics/mental-illness'
        },
        {
            text: 'What Types of Mental Illnesses Are There?',
            link: 'https://www.healthdirect.gov.au/types-of-mental-illness'
        },
        {
            text: 'What Is Therapy?',
            link: 'https://www.psychologytoday.com/us/basics/therapy'
        },
        {
            text: 'Where Can I Find A Therapist?',
            link: 'https://www.goodtherapy.org/find-therapist.html'
        },
        {
            text: 'The Different Types of Therapy',
            link: 'https://www.healthline.com/health/types-of-therapy'
        },
        {
            text: 'How Can I Help?',
            link: 'https://mhanational.org/issues/action-alerts'
        },
        {
            text: 'Early Warning Signs',
            link: 'https://www.mentalhealth.gov/basics/what-is-mental-health'
        },
        {
            text: 'NAMI Statistics On Mental Health',
            link: 'https://www.nami.org/mhstats'
        },
        {
            text: 'FAQ About Mental Health',
            link: 'https://mhanational.org/frequently-asked-questions'
        },
        {
            text: 'Types of Mental Health Professionals',
            link: 'https://www.nami.org/About-Mental-Illness/Treatments/Types-of-Mental-Health-Professionals'
        },
        {
            text: 'What Contributes To Mental Illness?',
            link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/mental-health-problems-introduction/causes/'
        }
    ],
    videos: [
        {
            link: 'https://www.youtube.com/embed/vD0w_gOEbUI',
            title: 'Take A Break'
        },
        {
            link: 'https://www.youtube.com/embed/saETdH-ffuE',
            title: 'Mental Health vs. Mental Illness'
        },
        {
            link: 'https://www.youtube.com/embed/-eBUcBfkVCo',
            title: 'Depression: The Secret We Share'
        },
        {
            link: 'https://www.youtube.com/embed/JUedQ0_EGCQ',
            title: 'Living With High Functioning Anxiety'
        }
    ]
}

$(document).ready(function() {
    $('#resources').on('click', function() {
        //update active class on nav
        $('.active').removeClass();
        $('#resources').addClass('active');

        //adjust page content
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('resources');
        

        let resourcesTemp = `
            <div id="support">
                <h1>
                    <a 
                        href="https://www.nami.org/Learn-More/Treatment/Getting-Treatment-During-a-Crisis"
                        target="_blank">
                        For Those In Need of Support During Crisis!
                    </a>
                </h1>
            </div>

            <div id="links">
                <ul id="list">
                </ul>
            </div>

            <div id="videos">

            </div>
        `;

        $('main').append(resourcesTemp);

        for (i = 0; i < resourcesData.videos.length; i++) {
            let videoTemp = `
                <iframe 
                    width="400" 
                    height="250" 
                    src="${resourcesData['videos'][i].link}" 
                    title="${resourcesData['videos'][i].title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;

            $('#videos').append(videoTemp);
        };

        for (i = 0; i < resourcesData.infoLinks.length; i++) {
            let linkTemp = `
            <li>
                <a href="${resourcesData['infoLinks'][i].link}" target="_blank"> ${resourcesData['infoLinks'][i].text}</a>
            </li>
            `;

            $('#list').append(linkTemp);
        };
    });
});

