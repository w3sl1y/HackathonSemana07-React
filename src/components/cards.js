import React, {Component} from "react";

class Cards extends Component{
    render(){
        return (
            <div class="cards">
        <div class="left">
          <div class="dory">
          <img src="https://www.elsoldemexico.com.mx/cultura/cine/2tky1t-ellen-dory/alternates/LANDSCAPE_400/ellen-dory" height="100px" width="150px"/><a>ELLEN DEGENERES is Dory</a>
          </div>
          <div class="hank">
          <img src="https://fanfest.com/wp-content/uploads/2016/06/finding-dory-ed-oneill-disney-pixar-studios-modern-family-abc-03312016.jpg" height="100px" width="150px"/><a>⠀⠀ED O'NEIL is Hank ⠀⠀⠀</a>
          </div>
          <div class="merlin">
          <img src="https://static.republika.co.id/uploads/images/inpicture_slide/finding-nemo-2-suara-merlin-ayah-nemo-masih-diisi-_130215144056-798.jpg" height="100px" width="150px"/><a>ALBERT BROOKS is Merlin</a>
          </div>
          <div class="destiny">
          <img src="https://pbs.twimg.com/media/ECP4rgdXoAA3p6s.jpg" height="100px" width="150px"/><a>KAITLIN OLSON is Destiny</a>
          </div>
          <div class="all-cast">
          <a href="#">SEE ALL CASTS (20)</a>
          </div>
        </div>
        <div class="right">
          <div class="new1">
            <div class="img">
              <img src="https://images.ctfassets.net/p0qf7j048i0q/2A0C290437254CB29216A4DD7E49711C/2835faf9361889319d6e238e95c737a2/061416-Blog-FindingDory.jpg?w=1000&h=750&fit=fill&fm=webp" height="300px" width="380px"/>
            </div>
            <div class="text">
              <a class="italic">Finding Dory is a Wonderful, Huge Adventure with Emotion to Spare</a>
              <p>Finding Dory should not be a good movie. It's a film the filmakers didn't want to make, starring a character who was considered a sidekick, and mode more than a decade after the original.<a class="nc" href="#">Read on USA Today</a></p>
            </div>
          </div>

          <div class="new2">
            <div class="img">
              <img src="https://i0.wp.com/www.jeraldinephneah.com/wp-content/uploads/2016/06/Destiny-dory.png?fit=996%2C749" height="300px" width="380px"/>
            </div>
            <div class="text">
              <a class="italic">Finding Dory Review: A Hearthwarming Sequel Awas with Emotion</a>
              <p>More than any other studio, Pixar knows how to walk the line between entertainment and social awareness in its feature films Finding Dory.<a class="nc" href="#">Read on Polygon</a></p>
            </div>
          </div>
        </div>
      </div>
        );
    }
    }
    export default Cards;