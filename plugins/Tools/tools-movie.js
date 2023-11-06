// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let imdbHandler=async(m,{conn:conn,text:text})=>{if(!text)throw"Please provide a movie title";try{let res=await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`);if(!res.ok)throw new Error(`API request failed with status ${res.status}`);let json=await res.json();console.log("JSON response:",json);let ratings=json.ratings.map((rating=>`• *${rating.source}:* ${rating.value}`)).join("\n"),movieInfo=`*Movie Information:*\n\n     • *Title:* ${json.title}\n\n     • *Year:* ${json.year}\n\n     • *Rated:* ${json.rated}\n\n     • *Released:* ${json.released}\n\n     • *Runtime:* ${json.runtime}\n\n     • *Genres:* ${json.genres}\n\n     • *Director:* ${json.director}\n\n     • *Writer:* ${json.writer}\n\n     • *Actors:* ${json.actors}\n\n     • *Plot:* ${json.plot}\n\n     • *Languages:* ${json.languages}\n\n     • *Country:* ${json.country}\n\n     • *Awards:* ${json.awards}\n\n     • *Metascore:* ${json.metascore}\n\n     • *Rating:* ${json.rating}\n\n     • *Votes:* ${json.votes}\n\n     • *IMDB ID:* ${json.imdbid}\n\n     • *Type:* ${json.type}\n\n     • *DVD:* ${json.dvd}\n\n     • *Box Office:* ${json.boxoffice}\n\n     • *Production:* ${json.production}\n\n     • *Website:* ${json.website}\n\n\n     *Ratings:*\n${ratings}`;await conn.sendFile(m.chat,json.poster,"poster.jpg",movieInfo,m)}catch(error){console.error(error)}};imdbHandler.help=["imdb","movie"],imdbHandler.tags=["tools"],imdbHandler.command=/^(imdb|movie)$/i;export default imdbHandler;