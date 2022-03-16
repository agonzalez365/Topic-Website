const leaderboardTemplate = `    <div id="title">  
<h1>
    Leaderboard
</h1>
</div>
<ul>
<li 
    id="first"><a 
    href="#"><img 
    src="images/leaderboard/nathan.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>C0rti_Metr00</p> 
    <div>264</div>
</li>
<li 
    id="second"><a 
    href="#"><img 
    src="images/leaderboard/sharian.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>_Yuuki_12</p> 
    <div>258</div>
</li>
<li 
    id="third"><a 
    href="#"><img 
    src="images/leaderboard/david.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>Da_S3raph_Sl1dz_</p>
    <div>252</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/laya.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>Gh0st_1</p> 
    <div>249</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/jhene.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>xX_K33m_Xx</p>
    <div>247</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/jenny.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>_Lad1eB0nes_</p> 
    <div>239</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/alex.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>Mayan_Priestess_98:</p> 
    <div>234</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/joseph.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>Basic_Training_247</p>
    <div>223</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/sally.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>u_St00pid</p>
    <div>222</div>
</li>
<li><a 
    href="#"><img 
    src="images/leaderboard/assia.jpg" 
    alt="Profile Picture" 
    height="100"
    width="100"></a>
    <p>N0_Im_N0t</p>
    <div>221</div>
</li>
</ul>`

$(document).ready(function() {
    $('#leaderboard').on('click', function() {
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('leaderboard');
        $('main').append(leaderboardTemplate);
    })
})