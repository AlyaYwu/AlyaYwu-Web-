(function () {
  // ==========================================================================
  // 資料來源: ./profile.json
  // 若要修改自介的固定資料 (名字, 地區, 生日, 技能, 遊戲, 聯絡方式...),
  // 直接編輯同目錄下的 profile.json, 2025 / 2026 兩版會一起套用。
  // 本檔案負責把 profile.json 轉成 2025 / 2026 HTML 期待的資料形狀。
  // ==========================================================================

  const normalize = (s, replacements) => {
    let out = s;
    replacements.forEach(([from, to]) => {
      out = out.split(from).join(to);
    });
    return out;
  };

  const pickLevel = (list, name, fallback) => {
    const m = Array.isArray(list) ? list.find((s) => s && s.name === name) : null;
    return m && typeof m.level === "number" ? m.level : fallback || 0;
  };

  function buildData(common) {
    return {
      lastUpdated: common.lastUpdated,
      sections: common.sections,
      v2025: {
        meta: {
          title: "小翰",
          description: "關於小翰的自介( •ω• ) 真的沒毒,網頁我自己做的",
        },
        theme: {
          allow: [
            "halloween",
            "christmas",
            "valentine",
            "cny",
            "cyber",
            "midautumn",
            "dragonboat",
            "newyear",
            "birthday",
          ],
          titleMap: {
            halloween: " 小翰 - 萬聖節",
            christmas: " 小翰 - 聖誕節",
            valentine: " 小翰 - 情人節",
            cny: " 小翰 - 春節",
            cyber: " 小翰",
            midautumn: " 小翰 - 中秋節",
            dragonboat: " 小翰 - 端午節",
            newyear: " 小翰 - 新年",
            birthday: " 小翰 - 我的生日!!!",
          },
          titleCopyMap: {
            birthday: {
              hidden: [
                { text: " 勞資數到三!!", ms: 2000 },
                { text: " 1", ms: 800 },
                { text: " 2", ms: 800 },
                { text: " 3", ms: 800 },
                { text: " 求求你嘛,我錯惹", ms: 0 },
              ],
              visible: " 兒子真乖~獎勵你1個好友碼",
            },
          },
          floatingElementsMap: {
            halloween: ["🎃", "👻", "🕸️", "🦇", "🍬", "💀", "🧟", "🕯️"],
            christmas: ["🎄", "🎁", "❄️", "⛄", "🔔", "🦌", "🌟", "🍪"],
            valentine: ["💝", "💘", "💟", "💌", "🌹", "🫶", "🕊️", "🍫"],
            cny: ["🏮", "🧧", "🧨", "🐲", "🥟", "🍊", "🎊", "🪭"],
            cyber: ["0", "1", "#", "*", "@", "+", "-", "="],
            midautumn: ["🌕", "🌙", "🥮", "🐇", "🎑", "🍵", "🏯", "🪄"],
            dragonboat: ["🐉", "🚣", "🫔", "🌿", "🎏", "🥢", "🌊", "🪢"],
            newyear: ["🎆", "🎇", "🥂", "🍾", "🕛", "🪩", "🥁", "🎺"],
            birthday: ["🎂", "🎈", "🍰", "🧁", "🎀", "🧸", "🥤", "🍩"],
          },
          heroTextMap: {
            halloween: { badge: " 萬聖節特別版 ", slogan: " 不給糖就搗蛋" },
            christmas: {
              badge: " 聖誕節特別版 ",
              slogan: " 叫爸爸,我就送你男/女朋友",
            },
            valentine: { badge: " 情人節特別版 ", slogan: " 還是一個人過嗎w? " },
            cny: { badge: " 春節特別版 ", slogan: " 給我錢錢!!" },
            cyber: { badge: "  ", slogan: "ouo" },
            midautumn: {
              badge: " 中秋節特別版 ",
              slogan: " 別吃月餅了,來卡一個w ",
            },
            dragonboat: {
              badge: " 端午節特別版 ",
              slogan: " 吃啥粽子,先卡在吃粽子w",
            },
            newyear: { badge: " 新年特別版 ", slogan: " 要跨年了嘛~帶我一個!!" },
            birthday: {
              badge: " 偶的生日w ",
              slogan: " 來都來了,把禮物留下在離開吧~",
            },
          },
          defaultUiText: {
            warningTitle: " 瀏覽器提示",
            warningMain: " 推薦使用外部瀏覽器開啟",
            warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
            warningButton: " 管他的,繼續前往w",
            toastText: " 已複製owo",
            footerTagline: "",
          },
          uiTextMap: {
            halloween: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            christmas: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            valentine: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            cny: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            cyber: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            midautumn: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            dragonboat: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            newyear: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 管他的,繼續前往w",
              toastText: " 已複製owo",
              footerTagline: "",
            },
            birthday: {
              warningTitle: " 瀏覽器提示",
              warningMain: " 推薦使用外部瀏覽器開啟",
              warningSub: " 內建瀏覽器容易卡頓(我也不知道w",
              warningButton: " 喔給喔給,知道惹w",
              toastText: " 已複製！",
              footerTagline: " Happy Birthday~",
            },
          },
        },
        header: {
          systemTimePrefix: "系統時間:",
        },
        quickNav: {
          titles: {
            top: "頂部",
            stats: "數據統計",
            basicInfo: "基本資訊",
            skills: "技能專長",
            games: "遊戲資訊",
            contact: "聯絡方式",
          },
        },
        greetings: {
          morning: " 早安",
          noon: " 午安",
          afternoon: " 下午好",
          evening: " 晚安",
          lateNight: " 凌晨好",
        },
        hero: {
          titleSuffix: " 陌生人，期待與你相遇",
          lastUpdatedText: "自介最後更新時間:" + common.lastUpdatedSlash,
          introLines: [],
        },
        stats: {
          title: "快速統計",
          cards: [
            { value: "8+", valueClass: "text-orange-400", label: "常玩遊戲" },
            { value: "6+", valueClass: "text-purple-400", label: "社交平台" },
            { value: "24/7", valueClass: "text-red-400", label: "基本在線" },
            { value: "95%", valueClass: "text-yellow-400", label: "熱情指數" },
          ],
        },
        basicInfo: {
          contact: {
            title: "聯絡方式",
            socialUrls: {
              facebook: common.contact.facebookUrl,
              instagram: common.contact.instagramUrl,
              youtube: common.contact.youtubeUrl,
            },
            platformsText: "DC | Line | WeChat | FB | IG | MSG",
            usageLabel: "使用習慣",
            usageText: common.contact.usageOrder,
          },
          games: {
            title: "我玩的遊戲",
            items: [
              "Minecraft (PC/手機端)",
              "Roblox | FreeFire | 傳說對決",
              "三角洲 | 光遇 | 第五人格",
            ],
          },
          status: {
            title: "簡介",
            items: [
              common.identity.callMe,
              ...(Array.isArray(common.identity.oneLiner)
                ? common.identity.oneLiner
                : [common.identity.oneLiner]),
              common.identity.department,
              "【 " + common.identity.region + " 】",
              "【 " + common.identity.birthday + " 】",
              ...(Array.isArray(common.identity.bioExtras)
                ? common.identity.bioExtras
                : []),
              ...(Array.isArray(common.identity.lifestyle)
                ? common.identity.lifestyle
                : []),
            ],
          },
        },
        skills: {
          title: "技能專長",
          programming: {
            title: "程式語言",
            valueClass: "text-orange-400",
            items: common.skills.programming,
          },
          professional: {
            title: "專業技能",
            valueClass: "text-purple-400",
            fillBackground: "linear-gradient(90deg, #a855f7, #ec4899)",
            items: common.skills.professional,
          },
        },
        gamesSection: {
          title: "遊戲資訊(常玩)",
          cards: {
            minecraft: {
              title: "Minecraft",
              rows: [
                { label: "喜歡玩的: ", value: common.games.minecraft.modes },
                { label: "", value: common.games.minecraft.platform },
                { label: "遊玩時數: ", value: common.games.minecraft.hours },
              ],
            },
            identityV: {
              title: "第五人格",
              rows: [
                { label: "有練過: ", value: common.games.identityV.roles },
                { label: "", value: common.games.identityV.note },
                { label: "段位: ", value: common.games.identityV.rank },
              ],
            },
          },
        },
        learningTimeline: {
          title: "學習歷程",
          items: [
            {
              title: "資工系學生",
              description: "專注於程式設計與滲透網路",
              status: "現在",
            },
            {
              title: "網路滲透學習",
              description: "持續學習資訊安全與滲透測試技術",
              status: "進行中",
            },
            {
              title: "網頁開發專案",
              description: "自製多個網頁專案，包括本站",
              status: "持續更新",
            },
          ],
        },
        sectionsTitles: {
          wishYou: "我希望你",
          pitfalls: "雷點",
          mayAnnoyYou: "可能雷你",
        },
        hobbies: {
          title: "興趣愛好",
          items: common.hobbies,
        },
        footer: {
          thanksText: "感謝你看到這裡 (´▽｀) 期待與你的相遇！",
        },
        identityVDetails: {
          title: "第吊人格",
          accounts: [
            {
              title: "大帳(已經送人惹)",
              id: common.games.identityV.idBig,
              copyValue: "你想幹嘛,不讓你複製 嘿嘿",
              copyButton: "複製",
            },
            {
              title: "小帳",
              id: common.games.identityV.idSmall,
              copyValue: common.games.identityV.idSmall,
              copyButton: "複製",
            },
          ],
          note: "加好友前要先跟我說一聲",
        },
        skyDetails: {
          title: "光遇",
          rows: [
            { label: "常駐: ", value: common.games.sky.regulars },
            { label: "技能: ", value: common.games.sky.skills },
            { label: "", value: common.games.sky.perk },
          ],
        },
        otherGames: {
          title: "其他遊戲資訊",
          cards: {
            freefire: {
              title: "FreeFire",
              lines: [
                "• 閒的發慌的是時候才會玩",
                "• 帳號用買的(他課了10幾萬)",
                "• 可組隊一起玩",
              ],
            },
            roblox: {
              title: "Roblox",
              lines: ["• 沒在玩了,不過你可以拉我上線玩"],
            },
            delta: {
              title: "三角洲",
              lines: ["• 退遊惹"],
            },
          },
        },
        contactDetails: {
          title: "詳細聯絡資訊",
          cards: {
            discord: {
              title: "Discord",
              value: common.contact.discordId,
              note: "第二常使用",
              copyLabel: "複製 ID",
              copyValue: common.contact.discordId,
            },
            instagram: {
              title: "Instagram",
              badge: "最常用",
              value: common.contact.instagramHandle,
              url: common.contact.instagramUrl,
              urlText: "前往 Instagram",
            },
            facebook: {
              title: "Facebook",
              value: common.contact.facebookHandle,
              note: "不定時使用",
              url: common.contact.facebookUrl,
              urlText: "前往 Facebook",
            },
            line: {
              title: "Line",
              value: "msg私訊給",
              note: "較少使用",
            },
            wechat: {
              title: "WeChat",
              value: "msg私訊給",
              note: "備用聯絡方式",
            },
            youtube: {
              title: "YouTube",
              value: common.contact.youtubeHandle,
              note: "偶爾發布影片",
              url: common.contact.youtubeUrl,
              urlText: "前往 YouTube",
            },
          },
        },
      },
      v2026: {
        meta: {
          title: "小翰 - 自介",
          description: "關於小翰的自介 - 基本資訊與聯絡方式",
        },
        nav: {
          brand: "小翰",
          links: {
            home: "首頁",
            about: "關於",
            projects: "作品",
            skills: "技能",
            blog: "喜好",
            blogMobile: "生活",
            contact: "聯絡",
          },
          extra: {
            backToChooserDesktop: "回到選擇自介版本頁",
            oldIntroDesktop: "2025版自介",
            backToChooserMobile: "回到選擇頁",
            oldIntroMobile: "舊的自介",
            ariaToggleMenu: "切換選單",
          },
        },
        home: {
          title: common.identity.aliasFull,
          subtitle: "",
          buttons: {
            projects: "探索作品",
            contact: "聯絡方式",
          },
        },
        about: {
          title: "關於我",
          description: "",
          simpleIntro: {
            title: "簡單介紹",
            regionValue: common.identity.region,
            regionLabel: "地區",
            birthdayValue: common.identity.birthday,
            birthdayLabel: "生日",
            bioLabel: "簡介：",
            bioItems: [
              { text: common.identity.callMe, iconClass: "fa-solid fa-user text-cyan-400" },
              ...(Array.isArray(common.identity.oneLiner)
                ? common.identity.oneLiner.map((t, i) => {
                    const oneLineIcons = [
                      "fa-solid fa-microphone text-green-400",
                      "fa-solid fa-cake-candles text-pink-400",
                      "fa-solid fa-user-slash text-gray-400",
                      "fa-solid fa-brain text-indigo-400",
                      "fa-solid fa-star text-yellow-400",
                    ];
                    return {
                      text: t,
                      iconClass: oneLineIcons[i] || "fa-solid fa-circle text-white/60",
                    };
                  })
                : [{ text: common.identity.oneLiner, iconClass: "fa-solid fa-circle-info text-purple-400" }]),
              { text: common.identity.department, iconClass: "fa-solid fa-graduation-cap text-blue-400" },
              { text: "平日以編程 / 學習為主", iconClass: "fa-solid fa-code text-cyan-400" },
              { text: "有時偷玩有時編程（有時候我會說打代碼，因為不用選字w", iconClass: "fa-solid fa-gamepad text-purple-400" },
              { text: "自製多個網頁專案，包括本站", iconClass: "fa-solid fa-rocket text-green-400" },
              ...(Array.isArray(common.identity.bioExtras)
                ? common.identity.bioExtras.map((t, i) => {
                    const extraIcons = [
                      "fa-solid fa-mars text-sky-400",
                      "fa-solid fa-moon text-yellow-400",
                      "fa-solid fa-exclamation text-red-400",
                    ];
                    return {
                      text: t,
                      iconClass: extraIcons[i] || "fa-solid fa-circle text-white/60",
                    };
                  })
                : []),
            ],
          },
          learning: {
            title: "正在學習",
            items: [
              {
                name: "Python",
                level: pickLevel(common.skills.programming, "Python", 30),
                iconClass: "fa-brands fa-python text-lg text-yellow-400",
              },
              {
                name: "網頁開發",
                level: pickLevel(common.skills.professional, "網頁開發", 30),
                iconClass: "fa-solid fa-globe text-lg text-cyan-400",
              },
              {
                name: "網路滲透測試",
                level: pickLevel(common.skills.professional, "網路滲透測試", 50),
                iconClass: "fa-solid fa-shield-halved text-lg text-purple-400",
              },
            ],
          },
          wishYouTitle: "我希望你",
          pitfallsTitle: "雷點",
          mayAnnoyTitle: "可能雷你",
        },
        projects: {
          title: "作品",
          description: "探索我的作品。",
          filters: {
            all: "全部",
            web: "網頁",
            security: "資安",
          },
          items: [
            {
              id: "azureax-web",
              name: "AzureaX 網站",
              description: "本站與個人頁面集合",
              category: "web",
              color: "#22d3ee",
              tags: ["靜態", "HTML", "CSS", "JS"],
            },
            {
              id: "pentest-learning",
              name: "滲透測試學習",
              description: "持續學習資訊安全與滲透測試技術",
              category: "security",
              color: "#34d399",
              tags: ["偵察", "網頁"],
            },
          ],
        },
        skills: {
          title: "技能",
          description: "技能與熟練度。",
          items: [
            ...common.skills.programming.map((s) => {
              const colorMap = {
                Python: "#f59e0b",
                JavaScript: "#22d3ee",
                "HTML/CSS": "#a855f7",
                "C++": "#60a5fa",
              };
              return {
                name: s.name,
                level: s.level,
                category: "程式語言",
                color: colorMap[s.name] || "#22d3ee",
              };
            }),
            ...common.skills.professional.map((s) => {
              const colorMap = {
                網路滲透測試: "#a855f7",
                網頁開發: "#22d3ee",
                "電腦維修/排除": "#34d399",
                系統管理: "#f472b6",
              };
              return {
                name: s.name,
                level: s.level,
                category: "專業技能",
                color: colorMap[s.name] || "#a855f7",
              };
            }),
          ],
        },
        blog: {
          title: "喜好",
          description: "遊戲與興趣。",
          gameTitle: "遊戲資訊(常玩)",
          hobbyTitle: "興趣愛好",
          games: [
            {
              name: "Minecraft",
              hours: common.games.minecraft.hours,
              modes: common.games.minecraft.modes,
              platform: common.games.minecraft.platform,
            },
            {
              name: "第五人格",
              rank: common.games.identityV.rank,
              roles: common.games.identityV.roles,
              note: common.games.identityV.note,
            },
            {
              name: "光遇",
              regulars: common.games.sky.regulars,
              skills: common.games.sky.skills,
              perk: common.games.sky.perk,
            },
          ],
          hobbies: common.hobbies.map((h) => ({
            title: h.title,
            description: normalize(h.description, [["ARP技術", " ARP 技術"]]),
          })),
        },
        contact: {
          title: "資訊",
          description: "關於我的詳細資訊/聯絡方式",
          cards: {
            infoTitle: "聯絡資訊",
            platformTitle: "平台",
          },
          info: {
            region: common.identity.region,
            birthday: common.identity.birthday,
            discordId: common.contact.discordId,
            usageHabit:
              "使用習慣：" + common.contact.usageOrder.replace(" > FB", ""),
          },
          platformLabels: {
            ig: "IG",
            yt: "YT",
            fb: "FB",
            dc: "DC",
          },
          platformUrls: {
            ig: common.contact.instagramUrl,
            yt: common.contact.youtubeUrl,
            fb: common.contact.facebookUrl,
          },
        },
        warnings: {
          webglUnavailable: "3D 功能不可用，已以 2D 模式顯示",
        },
        footer: {
          lastUpdatedPrefix: "自介更新日期：",
        },
        modal: {
          closeAriaLabel: "關閉",
        },
        skillModal: {
          categoryPrefix: "分類：",
          levelPrefix: "熟練度：",
        },
        toast: {
          copied: "已複製到剪貼簿",
        },
      },
    };
  }

  // 推出自己的 script src, 用來算出同目錄下的 profile.json 絕對 URL,
  // 這樣 2025 / 2026 任何一個 HTML 引入都能正確找到檔案。
  const myScript =
    document.currentScript ||
    (function () {
      const scripts = document.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i--) {
        const src = scripts[i].src || "";
        if (/about-copy\.js(\?.*)?$/.test(src)) return scripts[i];
      }
      return null;
    })();

  const profileUrl =
    myScript && myScript.src
      ? new URL("profile.json", myScript.src).href
      : "profile.json";

  // 先暴露一個空殼, 避免 HTML 讀到 undefined 而炸掉。
  // 實際資料等 profile.json 載入完再覆寫。
  window.AboutCopy = null;

  window.AboutCopyReady = fetch(profileUrl, { cache: "no-cache" })
    .then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then((profile) => {
      window.AboutCopy = buildData(profile);
      document.dispatchEvent(
        new CustomEvent("about-copy:ready", { detail: window.AboutCopy }),
      );
      return window.AboutCopy;
    })
    .catch((err) => {
      console.error("[about-copy] profile.json 載入失敗:", err);
      document.dispatchEvent(
        new CustomEvent("about-copy:ready", { detail: null }),
      );
      throw err;
    });
})();
