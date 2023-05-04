let allMusic = [
  {
    name: "Bật Tình Yêu Lên",
    artist: "Tăng Duy Tân x Hòa Minzy",
    img: "img/music/bat_tinh_yeu_len.jpg",
    src: "music/bat_tinh_yeu_len.mp3",
    idMusic: "song1",
  },
  {
    name: "Chỉ Cần Em Muốn",
    artist: "NP.2 x Hngle",
    img: "img/music/chi_can_em_muon.jpg",
    src: "music/chi_can_em_muon.mp3",
    idMusic: "song2",
  },
  {
    name: "Em Đồng Ý Nha",
    artist: "Nguyễn Quang Quý",
    img: "img/music/em_dong_y_nha.jpg",
    src: "music/em_dong_y_nha.mp3",
    idMusic: "song3",
  },
  {
    name: "Mặt Mộc",
    artist: "Phạm Ngọc Nguyên ft VAnh",
    img: "img/music/mat_moc.jpg",
    src: "./music/mat_moc.mp3",
    idMusic: "song4",
  },
  {
    name: "Nơi Này Có Anh",
    artist: "Sơn Tùng MT-P",
    img: "img/music/noi_nay_co_anh.jpg",
    src: "./music/noi_nay_co_anh.mp3",
    idMusic: "song5",
  },
  {
    name: "Người Yêu Tương Lai",
    artist: "Thảo Phạm",
    img: "img/music/nguoi_yeu_tuong_lai.jpg",
    src: "./music/nguoi_yeu_tuong_lai.mp3",
    idMusic: "song6",
  },
  {
    name: "Hai Mươi Hai",
    artist: "Amee x Hứa Kim Tuyền",
    img: "img/music/22.jpg",
    src: "./music/22.mp3",
    idMusic: "song7",
  },
  {
    name: "Muộn Rồi Mà Sao Còn",
    artist: "Sơn Tùng M-TP",
    img: "img/music/muon_roi_ma_sao_con.png",
    src: "./music/muon_roi_ma_sao_con.mp3",
    idMusic: "song8",
  },
  {
    name: "Tell Ur Mom II",
    artist: "Winno ft. Heily「Cukak Remix」",
    img: "img/music/tell_ur_mom_2.jpg",
    src: "./music/tell_ur_mom_2.mp3",
    idMusic: "song9",
  },
  {
    name: "Xích Thêm Chút",
    artist: "RPT Groovie ft TLinh x RPT MCK",
    img: "img/music/xich_them_chut.jpg",
    src: "./music/xich_them_chut.mp3",
    idMusic: "song10",
  },
  // {
  //   name: "Gió",
  //   artist: "JanK x Quanvrox「Lofi Ver.」",
  //   img: "img/music/gio.jpg",
  //   src: "./music/gio.mp3",
  //   idMusic: "song11",
  // },
  // {
  //   name: "Có Chắc Yêu Là Đây",
  //   artist: "Sơn Tùng MT-P",
  //   img: "img/music/co_chac_yeu_la_day.jpg",
  //   src: "./music/co_chac_yeu_la_day.mp3",
  //   idMusic: "song12",
  // },
  // {
  //   name: "Forget Me Now",
  //   artist: "Fishy ft. Trí Dũng",
  //   img: "img/music/forget_me_now.jpg",
  //   src: "./music/forget_me_now.mp3",
  //   idMusic: "song13",
  // },
  // {
  //   name: "Falling In Love",
  //   artist: "Na Ngọc Anh",
  //   img: "img/music/falling_in_love.jpg",
  //   src: "./music/falling_in_love.mp3",
  //   idMusic: "song14",
  // },
  // {
  //   name: "Không Phải Dạng Vừa Đâu",
  //   artist: "Sơn Tùng MT-P",
  //   img: "img/music/khong_phai_dang_vua_dau.jpg",
  //   src: "./music/khong_phai_dang_vua_dau.mp3",
  //   idMusic: "song15",
  // },
  // {
  //   name: "Anh Đã Quen Với Cô Đơn",
  //   artist: "Soobin Hoàng Sơn",
  //   img: "img/music/anh_da_quen_voi_co_don.jpg",
  //   src: "./music/anh_da_quen_voi_co_don.mp3",
  //   idMusic: "song16",
  // },
  // {
  //   name: "Tình Yêu Màu Hồng",
  //   artist: "Hồ Văn Quý x Xám x Freak D",
  //   img: "img/music/tinh_yeu_mau_hong.jpg",
  //   src: "./music/tinh_yeu_mau_hong.mp3",
  //   idMusic: "song17",
  // },
  // {
  //   name: "Tình Ca Tình Ta",
  //   artist: "Kis",
  //   img: "img/music/tinh_ca_tinh_ta.jpg",
  //   src: "./music/tinh_ca_tinh_ta.mp3",
  //   idMusic: "song18",
  // },
  // {
  //   name: "Ừ Có Anh Đây",
  //   artist: "Tino",
  //   img: "img/music/u_co_anh_day.jpg",
  //   src: "./music/u_co_anh_day.mp3",
  //   idMusic: "song19",
  // },
  // {
  //   name: "Răng Khôn",
  //   artist: "Phí Phương Anh",
  //   img: "img/music/rang_khon.jpg",
  //   src: "./music/rang_khon.mp3",
  //   idMusic: "song20",
  // },
  // {
  //   name: "Người Lạ Ơi",
  //   artist: "Superbrothers x Karik x Orange",
  //   img: "img/music/nguoi_la_oi.jpg",
  //   src: "./music/nguoi_la_oi.mp3",
  //   idMusic: "song21",
  // },
  // {
  //   name: "Quằng Lắm Em Ơi",
  //   artist: "DT, Mai Xuân Thứ ft Kim Ngân",
  //   img: "img/music/quang_lam_em_oi.jpg",
  //   src: "./music/quang_lam_em_oi.mp3",
  //   idMusic: "song22",
  // },
  // {
  //   name: "3107-2 (Lofi Ver.)",
  //   artist: "DuongG x Nâu x W/n x Freak D",
  //   img: "img/music/3107_2.jpg",
  //   src: "./music/3107_2.mp3",
  //   idMusic: "song23",
  // },
  // {
  //   name: "Như Anh Đã Thấy Em",
  //   artist: "PhucXp ft. Freak D",
  //   img: "img/music/nhu_anh_da_thay_em.jpg",
  //   src: "./music/nhu_anh_da_thay_em.mp3",
  //   idMusic: "song24",
  // },
  // {
  //   name: "Thế Giới Trong Em",
  //   artist: "Hương Ly (speed up)",
  //   img: "img/music/the_gioi_trong_em.jpg",
  //   src: "./music/the_gioi_trong_em.mp3",
  //   idMusic: "song25",
  // },
  // {
  //   name: "Giúp Anh Trả Lời Những Câu Hỏi",
  //   artist: "Vương Anh Tú",
  //   img: "img/music/giup_anh_tra_loi_nhung_cau_hoi.jpg",
  //   src: "./music/giup_anh_tra_loi_nhung_cau_hoi.mp3",
  //   idMusic: "song26",
  // },
  // {
  //   name: "3107",
  //   artist: "Nâu, titie , Dươngg",
  //   img: "img/music/3107.jpg",
  //   src: "./music/3107.mp3",
  //   idMusic: "song27",
  // },
  // {
  //   name: "Liệu Giờ",
  //   artist: "2T",
  //   img: "img/music/lieu_gio.jpg",
  //   src: "./music/lieu_gio.mp3",
  //   idMusic: "song28",
  // },
  // {
  //   name: "Bốn Mùa Thương Em",
  //   artist: "Lập Nguyên",
  //   img: "img/music/bon_mua_thuong_em.jpg",
  //   src: "./music/bon_mua_thuong_em.mp3",
  //   idMusic: "song29",
  // },
  // {
  //   name: "Lạc Vào Em",
  //   artist: "Lê Vũ",
  //   img: "img/music/lac_vao_em.jpg",
  //   src: "./music/lac_vao_em.mp3",
  //   idMusic: "song30",
  // },
  // {
  //   name: "",
  //   artist: "",
  //   img: "img/music/",
  //   src: "./music/.mp3",
  //   idMusic: "song31",
  // },
];

const playlist = document.querySelector(".playlist");
const musicName = document.querySelector(".title-music .name");
const musicArtist = document.querySelector(".title-music .artist");
const musicImg = document.querySelector(".music-img");
const progress = document.querySelector(".progress");
const progressbar = document.querySelector(".progress-bar");
const randomBtn = document.querySelector("#btn-random");
const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");
const playBtn = document.querySelector("#btn-play");
const playbackTimeBtn = document.querySelector("#btn-playback-time");
const songAudio = document.createElement("audio");

let currentIndex = 0;
let autoplay = 0;
let timer = 0;
let isPlaying = false;
let isRandom = false;
let isRepeat = false;

window.addEventListener("load", () => {
  loadMusic(currentIndex);
  playSongMusic();
});

// Xử lý khi click vào playlist
for (let i = 0; i < allMusic.length; i++) {
  let song = `<div class="song" musicindex="${i}">
                    <div class="left">
                      <div class="head">
                        <span>${i + 1}</span>
                      </div>
                        <div
                          class="song-img"
                          style="background-image: url('${allMusic[i].img}')">
                        </div>
                        <div class="title">
                          <div class="name">${allMusic[i].name}</div>
                          <div class="artist">${allMusic[i].artist}</div>
                        </div>
                      </div>
                    <div class="right">
                    <audio class="${allMusic[i].idMusic}"
                            src="${allMusic[i].src}">
                      </audio>
                      <div 
                        id="${allMusic[i].idMusic}" 
                        class="audio-duration">3:23</div>
                      <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                      </div>
                    </div>
                  </div>`;
  playlist.insertAdjacentHTML("beforeend", song);
  let songAudioDuration = document.querySelector(`#${allMusic[i].idMusic}`);
  let songAudioTag = document.querySelector(`.${allMusic[i].idMusic}`);
  // -------hiển thị thời gian bài hát------------
  songAudioTag.addEventListener("loadeddata", () => {
    let audioDuration = songAudioTag.duration;
    let totalMusicmin = Math.floor(audioDuration / 60);
    let totalMusicsec = Math.floor(audioDuration % 60);
    if (totalMusicsec < 10) {
      totalMusicsec = `0${totalMusicsec}`;
    }
    songAudioDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
  });
}
//
const allSongMusic = playlist.querySelectorAll(".song");
const songHead = playlist.querySelectorAll(".head span");

function playSongMusic() {
  for (let j = 0; j < allSongMusic.length; j++) {
    // if (allSongMusic[j].classList.contains("loader")) {
    //   songHead[j].classList.remove("loader");
    // }
    // if (allSongMusic[j].getAttribute("musicindex") == currentIndex) {
    //   songHead[j].classList.add("loader");
    // }
    allSongMusic[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(index) {
  let getSongIndex = index.getAttribute("musicindex");
  currentIndex = getSongIndex;
  loadMusic(currentIndex);
  playsong();
  playSongMusic();
}
// Load Music
function loadMusic(index) {
  musicName.innerText = allMusic[index].name;
  musicArtist.innerText = allMusic[index].artist;
  musicImg.style.backgroundImage = `url(${allMusic[index].img})`;
  songAudio.src = allMusic[index].src;
  songAudio.load();
}
loadMusic(currentIndex);

// Play song
function musicPlay() {
  if (isPlaying) {
    pausesong();
  } else {
    playsong();
  }
}
function playsong() {
  isPlaying = true;
  songAudio.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
function pausesong() {
  isPlaying = false;
  songAudio.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Next song
function nextSong() {
  if (currentIndex < allMusic.length - 1) {
    currentIndex++;
    loadMusic(currentIndex);
    playSongMusic();
    playsong();
  } else {
    currentIndex = 0;
    loadMusic(currentIndex);
    playSongMusic();
    playsong();
  }
}
nextBtn.onclick = function () {
  nextSong();
};
// Prev song
function prevSong() {
  if (currentIndex > 0) {
    currentIndex--;
    loadMusic(currentIndex);
    playSongMusic();
    playsong();
  } else {
    currentIndex = allMusic.length - 1;
    loadMusic(currentIndex);
    playSongMusic();
    playsong();
  }
}
prevBtn.onclick = function () {
  prevSong();
};

// Tự động chuyển bài khi kết thúc
songAudio.addEventListener("ended", () => {
  nextSong();
});

// Random song

// progress
songAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressbar.style.width = `${progressWidth}%`;

  let musicCurrentTime = document.querySelector(".current");
  let musicDuration = document.querySelector(".duration");
  songAudio.addEventListener("loadeddata", () => {
    let audioduration = songAudio.duration;
    let totalMusicmin = Math.floor(audioduration / 60);
    let totalMusicsec = Math.floor(audioduration % 60);
    if (totalMusicsec < 10) {
      totalMusicsec = `0${totalMusicsec}`;
    }
    musicDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
  });
  let currentMusicmin = Math.floor(currentTime / 60);
  let currentMusicsec = Math.floor(currentTime % 60);
  if (currentMusicsec < 10) {
    currentMusicsec = `0${currentMusicsec}`;
  }
  musicCurrentTime.innerText = `${currentMusicmin}:${currentMusicsec}`;
});

// ----------- Tua nhạc-------
progress.addEventListener("click", (e) => {
  let progressWidthval = progress.clientWidth;
  let clickOffsetX = e.offsetX;
  let songDuration = songAudio.duration;
  songAudio.currentTime = (clickOffsetX / progressWidthval) * songDuration;
  playsong();
});

// --------Volume--------
const volumeBtn = document.querySelector(".btn-volume");
const recent_volume = document.querySelector("#volume");

function volume_change() {
  songAudio.volume = recent_volume.value / 100;
}
volumeBtn.addEventListener("click", function () {
  if (songAudio.volume > 0) {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
    songAudio.volume = 0;
  } else {
    volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    songAudio.volume = recent_volume.value / 100;
  }
});
