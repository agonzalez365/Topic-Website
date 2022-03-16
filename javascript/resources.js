const resourcesTemp = `    <div id="support">
<h1>
    <a 
        href="https://www.nami.org/Learn-More/Treatment/Getting-Treatment-During-a-Crisis"
        target="_blank">
        For Those In Need of Support During Crisis!
    </a>
</h1>
</div>
<div id="links">
<h4><a  
    href="https://www.youtube.com/watch?v=xGX3cd2eEgY"
    target="_blank">
    Need To Smile Today?
</a></h4>
<h4><a  
    href="https://uhs.umich.edu/tenthings"
    target="_blank">
    How To Promote Your Own Mental Health
</a></h4>
<h4><a  
    href="https://www.nimh.nih.gov/health/statistics/mental-illness"
    target="_blank">
    What Is A Mental Illness?
</a></h4>
<h4>
    <a  
    href="https://www.healthdirect.gov.au/types-of-mental-illness"
    target="_blank">
    What Types of Mental Illnesses Are There?
</a></h4>
<h4><a  
    href="https://www.psychologytoday.com/us/basics/therapy"
    target="_blank">
    What Is Therapy?
</a></h4>
<h4><a  
    href="https://www.goodtherapy.org/find-therapist.html"
    target="_blank">
    Where Can I Find A Therapist?
</a></h4>
<h4><a  
    href="https://www.healthline.com/health/types-of-therapy"
    target="_blank">
    The Different Types of Therapy
</a></h4>
<h4><a  
    href="https://mhanational.org/issues/action-alerts"
    target="_blank">
    How Can I Help?
</a></h4>
<h4><a  
    href="https://www.mentalhealth.gov/basics/what-is-mental-health"
    target="_blank">
    Early Warning Signs
</a></h4>
<h4><a  
    href="https://www.nami.org/mhstats"
    target="_blank">
    NAMI Statistics On Mental Health
</a></h4>
<h4><a  
    href="https://mhanational.org/frequently-asked-questions"
    target="_blank">
    FAQ About Mental Health
</a></h4>
<h4><a  
    href="https://www.nami.org/About-Mental-Illness/Treatments/Types-of-Mental-Health-Professionals"
    target="_blank">
    Types of Mental Health Professionals
</a></h4>
<h4><a  
    href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/mental-health-problems-introduction/causes/"
    target="_blank">
    What Contributes To Mental Illness?
</a></h4>
</div>
<div id="videos">
<iframe 
    width="400" 
    height="250" 
    src="https://www.youtube.com/embed/vD0w_gOEbUI" 
    title="Take A Break" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
<iframe 
    width="400" 
    height="250" 
    src="https://www.youtube.com/embed/saETdH-ffuE" 
    title="Mental Health vs. Mental Illness" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
<iframe 
    width="400" 
    height="250" 
    src="https://www.youtube.com/embed/-eBUcBfkVCo" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
<iframe 
    width="400" 
    height="250" 
    src="https://www.youtube.com/embed/JUedQ0_EGCQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
</div>`

$(document).ready(function() {
    $('#resources').on('click', function() {
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('resources');
        $('main').append(resourcesTemp);
    })
})