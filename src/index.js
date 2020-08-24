import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

var quotes = ['“Ignorance of Scripture is ignorance of Christ.”','-St. Jerome','“Since Christ Himself has said, “This is My Body” who shall dare to doubt that It is His Body?”','-St. Cyril of Jerusalem','“Teach us to give and not count the cost.”','-St. Ignatius de Loyola','“Pray as though everything depended on God. Work as though everything depended on you.”','-St. Augustine','“Don’t you long to shout to those youths who are bustling around you: Fools! Leave those worldly things that shackle the heart – and very often degrade it – leave all that and come with us in search of Love!”','-St. Josemaria Escriva','“For me prayer is a surge of the heart, it is a simple look towards Heaven, it is a cry of recognition and of love, embracing both trial and joy.”','-St. Therese of Lisieux','“To convert somebody go and take them by the hand and guide them.”','-St. Thomas Aquinas','“On the question of relating to our fellowman – our neighbor’s spiritual need transcends every commandment. Everything else we do is a means to an end. But love is an end already, since God is love.”','-St. Teresia Benedicta (Edith Stein)','“If you are what you should be, you will set the whole world ablaze!”','-St. Catherine of Sienna','“Lord, make me an instrument of your peace; where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; and where there is sadness, joy.”','-St. Francis','“Our hearts were made for You, O Lord, and they are restless until they rest in you.”','-St. Augustine of Hippo','“Charity is certainly greater than any rule. Moreover, all rules must lead to charity.”','-St. Vincent de Paul','“Late have I loved you, O Beauty ever ancient, ever new, late have I loved you!”','-St. Augustine','“O Master, make me chaste, but not yet!”','-St. Augustine','“’Eat my flesh,’ [Jesus] says, ‘and drink my blood.’ The Lord supplies us with these intimate nutrients, he delivers over his flesh and pours out his blood, and nothing is lacking for the growth of his children”','-St. Clement of Alexandria','“Priests have received a power which God has given neither to angels nor to archangels. It was said to them: ‘Whatsoever you shall bind on earth shall be bound in heaven; and whatsoever you shall loose, shall be loosed.’ Temporal rulers have indeed the power of binding; but they can only bind the body. Priests, in contrast, can bind with a bond which pertains to the soul itself and transcends the very heavens. Did [God] not give them all the powers of heaven?…What greater power is there than this? The Father has given all judgment to the Son. And now I see the Son placing all this power in the hands of men. They are raised to this dignity as if they were already gathered up to heaven”','-St. John Chrysostom','“The nation doesn’t simply need what we have. It needs what we are.”','-St. Teresia Benedicta (Edith Stein)','“We are to love God for Himself, because of a twofold reason; nothing is more reasonable, nothing more profitable.”','-St. Bernard of Clairvaux','“We always find that those who walked closest to Christ were those who had to bear the greatest trials.”','-St. Teresa of Avila','“Wherever the bishop shall appear, there let the multitude also be; even as, wherever Jesus Christ is, there is the Catholic Church.”','-St. Ignatius of Antioch','“If this is the way You treat Your friends, no wonder You have so few!”','-St. Teresa of Avila','“Give something, however small, to the one in need. For it is not small to one who has nothing. Neither is it small to God, if we have given what we could.”','-St. Gregory Nazianzen','“Christ be with me, Christ within me, Christ behind me, Christ before me, Christ beside me, Christ to win me, Christ to comfort me and restore me, Christ beneath me, Christ above me, Christ in quiet, Christ in danger, Christ in hearts of all that love me, Christ in mouth of friend and stranger.”','-St. Patrick','“Christ said, “I am the Truth”; he did not say “I am the custom.”','-St. Toribio','“All the efforts of the human mind cannot exhaust the essence of a single fly.”','-St. Thomas Aquinas','“There are more tears shed over answered prayers than over unanswered prayers.”','-St. Teresa of Avila','“I have no taste for corruptible food nor for the pleasures of this life. I desire the bread of God, which is the flesh of Jesus Christ, who was of the seed of David; and for drink I desire his blood, which is love incorruptible”','-St. Ignatius of Antioch','“You cannot be half a saint; you must be a whole saint or no saint at all.”','-St. Therese of Lisieux','“You must ask God to give you power to fight against the sin of pride which is your greatest enemy – the root of all that is evil, and the failure of all that is good. For God resists the proud.”','-St. Vincent de Paul','“Let us go forward in peace, our eyes upon heaven, the only one goal of our labors.”','-St. Therese of Lisieux','“When you approach the tabernacle remember that he has been waiting for you for twenty centuries.”','– St. Josemaria Escriva','“From silly devotions and sour-faced saints, good Lord, deliver us!”','-St. Teresa of Avila','“Love God, serve God; everything is in that.”','-St. Clare of Assisi','“Pray with great confidence, with confidence based upon the goodness and infinite generosity of God and upon the promises of Jesus Christ. God is a spring of living water which flows unceasingly into the hearts of those who pray.”','-St. Louis de Montfort','“Apart from the cross, there is no other ladder by which we may get to heaven.”','-St. Rose of Lima','“The creator of the heavens obeys a carpenter; the God of eternal glory listens to a poor virgin. Has anyone ever witnessed anything comparable to this? Let the philosopher no longer disdain from listening to the common laborer; the wise, to the simple; the educated, to the illiterate; a child of a prince, to a peasant.”','-St. Anthony of Padua','“Charity is that with which no man is lost, and without which no man is saved.”','-St. Robert Bellarmine','“Whether, therefore, we receive what we ask for, or do not receive it, let us still continue steadfast in prayer. For to fail in obtaining the desires of our heart, when God so wills it, is not worse than to receive it; for we know not as He does, what is profitable to us.”','-St. John Chrysostom','“What does the poor man do at the rich man’s door, the sick man in the presence of his physician, the thirsty man at a limpid stream? What they do, I do before the Eucharistic God. I pray. I adore. I love.” ','-St. Francis','“Holy Communion is the shortest and safest way to heaven.”','-Pope St. Pius X','“We will either accuse ourselves or excuse ourselves.”','-St. John Vianney','“If a man wishes to be sure of the road he treads on, he must close his eyes and walk in the dark.”','-St. John of the Cross','“He loves, He hopes, He waits. If He came down on our altars on certain days only, some sinner, on being moved to repentance, might have to look for Him, and not finding Him, might have to wait. Our Lord prefers to wait Himself for the sinner for years rather than keep him waiting one instant.”','-St. Julian Peter Eymard','“Love is the most necessary of all virtues. Love in the person who preaches the word of God is like fire in a musket. If a person were to throw a bullet with his hands, he would hardly make a dent in anything; but if the person takes the same bullet and ignites some gunpowder behind it, it can kill. It is much the same with the word of God. If it is spoken by someone who is filled with the fire of charity- the fire of love of God and neighbor- it will work wonders.”','-St. Anthony Mary Claret','“Our Lord loves you and loves you tenderly; and if He does not let you feel the sweetness of His love, it is to make you more humble and abject in your own eyes.”','-St. Pio of Pietrelcino','“You learn to speak by speaking, to study by studying, to run by running, to work by working, and just so, you learn to love by loving. All those who think to learn in any other way deceive themselves.”','-St. Francis de Sales','“Pray, Hope, and Don’t Worry”','-St. Pio of Pietrelcino','“All the darkness in the world cannot extinguish the light of a single candle.”','-St. Francis','“Tribulation is a gift from God – one that he especially gives His special friends.”','-St. Thomas More','“If I speak to thee in friendship’s name, thou think’st I speak too coldly, if I mention love’s devoted flame, thou say’st I speak too boldly”','– St. Thomas More'];

const quoteBoxStyle = {
  fontFamily: 'cursive',
  background: 'whitesmoke',
  width: 500,
  height: 400,
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const quoteStyle = {
  margin: 0,
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 25,
  width: 450,
  height: 250,
  fontSize: 24,
  lineHeight: 1.3,
  overflow: 'auto',
  display: 'flex',
  alignItems: 'center'
}

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}

const getQuote = index => quotes[2*index];

const getAuthor = index =>
  quotes[2*index+1];

var quoteIndex = 0;

var twitterLink;

const updateIndex = function () {
  let currentIndex = quoteIndex;
  do {
    quoteIndex = Math.floor(Math.random()*50);
  } while ((quoteIndex === currentIndex) || (getQuote(quoteIndex).length > 250));
}

var color = '#00ff00';

function updateColor() {
  var r, g, b;
  do {
    r = Math.floor(Math.random()*240);
  } while (r < 16);
  do {
    g = Math.floor(Math.random()*240);
  } while (g < 16);
  do {
    b = Math.floor(Math.random()*240);
  } while (b < 16);
  color = ("#" + r.toString(16) + g.toString(16) + b.toString(16));
  console.log(color);
}

function setLink() {
  twitterLink = "https://twitter.com/intent/tweet?text=" + getQuote(quoteIndex) + " " + getAuthor(quoteIndex);
}

class QuoteBox extends React.Component {
  render() {
    updateColor();
    document.body.style.background = color;
    document.body.style.color = color;
    updateIndex();
    setLink();
    return (
      <div style={centerStyle}><section
        id="quote-box"
        style={quoteBoxStyle}>
        <blockquote id="text" style={quoteStyle}>{getQuote(quoteIndex)}</blockquote>
        <p id="author">{getAuthor(quoteIndex)}</p>
        <div>
          <a id="tweet-quote" href={twitterLink} target="_blank" rel="noopener noreferrer">
            <button style={{color: 'white', background: color}}>Tweet Quote</button>
          </a>
          <button id="new-quote" style={{background: color}} onClick={() => { this.forceUpdate();}}>New Quote</button>
        </div>
      </section></div>
    )
  }
};


ReactDOM.render(
  <QuoteBox />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
