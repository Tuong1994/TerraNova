"use strict";

const { movieStatus, movieType, movieCountry } = require("../interface/movie");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          id: "M_0001",
          nameVN: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY",
          nameENG: "Harry Potter and the Philosopher's Stone",
          nameCH: "哈利·波特与魔法石",
          trailer: "https://www.youtube.com/embed/lzZ_Z1Sfczg",
          image: "",
          duration: "230",
          descVN:
            "Chuyển thể của phần đầu tiên của cuốn tiểu thuyết dành cho thiếu nhi nổi tiếng của tác giả J.K.Rowling, cậu bé Harry Potter vào sinh nhật lần thứ 11 rằng bố mẹ cậu là hai vị phù thủy nổi tiếng. Bản thân cậu sở hữu phép thuật và năng lực mà ai cũng mong muốn có được sau khi sống sót khỏi Chúa tể Voldermort. Từ cuộc sống của một đứa trẻ mồ côi, cậu trở thành một học sinh tại ngôi trường phù thủy danh giá Hogwarts. Tại đây, cậu đã tìm được những người bạn thân nhất của mình và giúp cậu khám phá ra sự thật về cái chết bí ẩn của cha mẹ mình.",
          descENG:
            "Adapted from the first part of the popular children's novel by author J.K. Rowling, Harry Potter boy on his 11th birthday claims that his parents are two famous wizards. He himself possessed the magic and powers that everyone wished to have after surviving Lord Voldemort. From his life as an orphan, he became a student at the prestigious Hogwarts School of Witchcraft and Wizardry. There, he found his best friends and helped him uncover the truth about his parents' mysterious deaths",
          descCH:
            "改编自作家 J.K.罗琳的畅销儿童小说的第一部分，哈利波特男孩在他 11 岁生日时声称他的父母是两位著名的巫师。他自己拥有在伏地魔幸存下来之后每个人都希望拥有的魔法和力量。从他作为孤儿的生活开始，他成为了著名的霍格沃茨魔法学校的学生。在那里，他找到了最好的朋友，并帮助他揭开了父母神秘死亡的真相。",
          releaseDay: "2001-11-14T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "Chris Columbus",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0002",
          nameVN: "HARRY POTTER AND CĂN PHÒNG BÍ MẬT",
          nameENG: "Harry Potter and the Chamber of Secrets",
          nameCH: "哈利·波特与密室",
          trailer: "https://www.youtube.com/embed/TdYq3WrTCBA",
          image: "",
          duration: "230",
          descVN:
            "Phần tiếp theo của loạt phim Harry Potter vẫn tiếp tục xoay quanh bộ ba Harry Potter - Ron Weasley - Hermione Granger. Bộ ba phù thủy sẽ đối mặt với một thử thách mới trong năm học thứ 2 tại trường Hogwarts. Một thế lực hắc ám đang bao trùm ngôi trường phù thủy này, tấn công hàng loạt học sinh và đe dọa mở Phòng Chứa Bí Mật một lần nữa.",
          descENG:
            "The sequel to the Harry Potter series continues to revolve around the Harry Potter - Ron Weasley - Hermione Granger trilogy. The trio of wizards will face a new challenge during their second year at Hogwarts. A dark force is covering this wizarding school, attacking a series of students and threatening to open the Chamber of Secrets again.",
          descCH:
            "哈利波特系列的续集继续围绕着哈利波特-罗恩韦斯莱-赫敏格兰杰三部曲展开。三人组在霍格沃茨的第二年将面临新的挑战。一股黑暗势力正笼罩着这所魔法学校，袭击了一系列学生，并威胁要再次打开密室。",
          releaseDay: "2002-11-03T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "Chris Columbus",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0003",
          nameVN: "HARRY POTTER VÀ TÊN TÙ NHÂN NGỤC AZKABAN",
          nameENG: "Harry Potter and the Prisoner of Azkaban",
          nameCH: "哈利波特与阿兹卡班的囚徒",
          trailer: "https://www.youtube.com/embed/lAxgztbYDbs",
          image: "",
          duration: "230",
          descVN:
            "Harry, Ron và Hermoine quay trở lại Hogwarts khi họ biết về Sirius Black và kế hoạch giết Harry của hắn.",
          descENG:
            "Harry, Ron and Hermoine return to Hogwarts just as they learn about Sirius Black and his plans to kill Harry. However, when Harry runs into him, he learns that the truth is far from reality.",
          descCH:
            "哈利、罗恩和赫蒙在得知小天狼星布莱克和他要杀死哈利的计划后回到霍格沃茨。然而，当哈利遇到他时，他得知事实与现实相去甚远。",
          releaseDay: "2004-05-31T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "Alfonso Cuarón",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0004",
          nameVN: "HARRY POTTER VÀ CHIẾC CỐC LỬA",
          nameENG: "Harry Potter and The Goblet Of Fire",
          nameCH: "哈利·波特与火焰杯",
          trailer: "https://www.youtube.com/embed/3EGojp4Hh6I",
          image: "",
          duration: "230",
          descVN:
            "Khi Harry được chọn làm người thứ tư tham gia Giải đấu Triwizard liên trường, cậu vô tình bị lôi kéo vào một âm mưu đen tối đang dần hé lộ chương trình nguy hiểm của nó.",
          descENG:
            "When Harry gets chosen as the fourth participant in the inter-school Triwizard Tournament, he is unwittingly pulled into a dark conspiracy that slowly unveils its dangerous agenda.",
          descCH:
            "当哈利被选为校际三强争霸赛的第四名参赛者时，他不知不觉地卷入了一个黑暗的阴谋，这个阴谋慢慢地揭示了它的危险议程。",
          releaseDay: "2005-11-18T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "Mike Newell",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0005",
          nameVN: "HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG",
          nameENG: "Harry Potter and The Order Of The Phoenix",
          nameCH: "哈利波特与凤凰社",
          trailer: "https://www.youtube.com/embed/y6ZW7KXaXYk",
          image: "",
          duration: "230",
          descVN:
            "Lời cảnh báo của Harry Potter và cụ Dumbledore về sự trở lại của Chúa tể Voldemort không được các nhà chức trách phù thủy chú ý, những người mà ngược lại, họ tìm cách làm suy yếu quyền lực của cụ Dumbledore tại trường Hogwarts và làm mất uy tín của Harry.",
          descENG:
            "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
          descCH:
            "哈利波特和邓布利多关于伏地魔回归的警告没有得到巫师当局的注意，他们反过来试图破坏邓布利多在霍格沃茨的权威并诋毁哈利。",
          releaseDay: "2007-07-11T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0006",
          nameVN: "HARRY POTTER VÀ HOÀNG TỬ LAI",
          nameENG: "Harry Potter and The Half Blood Prince",
          nameCH: "哈利·波特与混血王子",
          trailer: "https://www.youtube.com/embed/JYLdTuL9Wjw",
          image: "",
          duration: "230",
          descVN:
            "Dumbledore và Harry Potter tìm hiểu thêm về quá khứ của Voldemort và sự vươn lên quyền lực của hắn Trong khi đó, Harry tình cờ tìm thấy một cuốn sách giáo khoa cũ về độc dược của một người tự xưng là Hoàng tử lai.",
          descENG:
            "Dumbledore and Harry Potter learn more about Voldemort's past and his rise to power. Meanwhile, Harry stumbles upon an old potions textbook belonging to a person calling himself the Half-Blood Prince.",
          descCH:
            "邓布利多和哈利波特更多地了解伏地魔的过去和他的掌权。与此同时，哈利偶然发现一本旧魔药教科书，属于一个自称混血王子的人。",
          releaseDay: "2009-07-15T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0007",
          nameVN: "HARRY POTTER VÀ BẢO BỐI TỬ THẦN PHẦN I",
          nameENG: "Harry Potter and The Deathly Hallows Part 1",
          nameCH: "哈利波特与死亡圣器第 1 部分",
          trailer: "https://www.youtube.com/embed/MxqsmsA8y5k",
          image: "",
          duration: "230",
          descVN:
            "Sau khi Voldemort tiếp quản Bộ Pháp thuật, Harry, Ron và Hermione buộc phải ẩn náu. Họ cố gắng giải mã những manh mối mà cụ Dumbledore để lại cho họ để tìm và phá hủy các Trường sinh linh giá của Voldemort",
          descENG:
            "After Voldemort takes over the Ministry of Magic, Harry, Ron and Hermione are forced into hiding. They try to decipher the clues left to them by Dumbledore to find and destroy Voldemort's Horcruxes",
          descCH:
            "伏地魔接管魔法部后，哈利、罗恩和赫敏被迫躲藏起来。他们试图破译邓布利多留给他们的线索，以找到并摧毁伏地魔的魂器",
          releaseDay: "2010-11-26T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0008",
          nameVN: "HARRY POTTER VÀ BẢO BỐI TỬ THẦN PHẦN II",
          nameENG: "Harry Potter and The Deathly Hallows Part 2",
          nameCH: "哈利波特与死亡圣器第 2 部分",
          trailer: "https://www.youtube.com/embed/5NYt1qirBWg",
          image: "",
          duration: "230",
          descVN:
            "Harry, Ron và Hermione chạy đua với thời gian để tiêu diệt các Trường sinh linh giá còn sót lại. Trong khi đó, các học sinh và giáo viên đoàn kết bảo vệ trường Hogwarts chống lại Chúa tể Voldemort và Tử thần Thực tử",
          descENG:
            "Harry, Ron and Hermione race against time to destroy the remaining Horcruxes. Meanwhile, the students and teachers unite to defend Hogwarts against Lord Voldemort and the Death Eaters",
          descCH:
            "哈利、罗恩和赫敏争分夺秒地摧毁剩下的魂器。与此同时，学生和老师们团结起来保卫霍格沃茨，对抗伏地魔和食死徒",
          releaseDay: "2011-07-15T00:00:00",
          actors: "Daniel Radcliffe, Rupert Grint, Emma Waston",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_009",
          nameVN: "SINH VẬT HUYỀN BÝ",
          nameENG: "Fantastic Beast and Where To Find Them",
          nameCH: "神奇动物在哪里",
          trailer: "https://www.youtube.com/embed/ViuDsy7yb8M",
          image: "",
          duration: "230",
          descVN:
            "Sinh vật huyền bí là một bộ phim giả tưởng năm 2016 của đạo diễn David Yates và do J. K. Rowling viết kịch bản. Đây là phần đầu tiên trong loạt phim Fantastic Beasts và là phần thứ chín trong loạt phim Thế giới phù thủy, đóng vai trò là phần phụ và tiền truyện của loạt phim Harry Potter, lấy cảm hứng từ cuốn sách hướng dẫn cùng tên năm 2001 của Rowling. Phim có sự góp mặt của dàn diễn viên bao gồm Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Ron Perlman và Colin Farrell.",
          descENG:
            "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates and written by J. K. Rowling. It is the first instalment in the Fantastic Beasts film series and the ninth overall in the Wizarding World franchise, serving as a spin-off of and prequel to the Harry Potter film series, inspired by the 2001 guide book of the same name by Rowling. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Ron Perlman, and Colin Farrell.",
          descCH:
            "《神奇动物在哪里》是一部 2016 年的奇幻电影，由大卫·耶茨执导，J.K.罗琳编剧。这是神奇野兽系列电影的第一部，也是魔法世界系列的第九部，是哈利波特系列电影的衍生和前传，灵感来自罗琳 2001 年的同名指南。这部电影的演员阵容包括埃迪·雷德梅恩、凯瑟琳·沃特斯顿、丹·福格勒、艾莉森·苏多尔、以斯拉·米勒、萨曼莎·莫顿、乔恩·沃特、卡门·埃乔戈、罗恩·普尔曼和科林·法瑞尔。",
          releaseDay: "2016-11-18T00:00:00",
          actors:
            "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0010",
          nameVN: "SINH VẬT HUYỀN BÝ: TỘI ÁC CỦA GRINDELWALD",
          nameENG: "Fantastic Beast and The Crime Of Grindelwald",
          nameCH: "神奇动物在哪里",
          trailer: "https://www.youtube.com/embed/ViuDsy7yb8M",
          image: "",
          duration: "230",
          descVN:
            "Fantastic Beasts: The Crimes of Grindelwald là một bộ phim giả tưởng năm 2018 của đạo diễn David Yates và do J. K. Rowling viết kịch bản. Đây là phần tiếp theo của Fantastic Beasts and Where to Find Them (2016), phần thứ hai trong loạt phim Fantastic Beasts và là phần thứ mười trong loạt phim Wizarding World. Phim có sự góp mặt của dàn diễn viên bao gồm Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law và Johnny Depp. Lấy bối cảnh năm 1927, phim theo chân Newt Scamander và Albus Dumbledore khi họ cố gắng hạ gục phù thủy hắc ám Gellert Grindelwald trong khi đối mặt với những mối đe dọa mới trong một thế giới phù thủy bị chia rẽ hơn",
          descENG:
            "Fantastic Beasts: The Crimes of Grindelwald is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. It is the sequel to Fantastic Beasts and Where to Find Them (2016), the second instalment in the Fantastic Beasts film series, and the tenth overall in the Wizarding World franchise. It features an ensemble cast including Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law, and Johnny Depp. Set in 1927, it follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world",
          descCH:
            "《神奇动物在哪里：格林德沃之罪》是一部 2018 年的奇幻电影，由大卫·耶茨执导，J.K.罗琳编剧。它是《神奇动物在哪里》（2016 年）的续集，是《神奇动物在哪里》系列电影的第二部，也是魔法世界系列的第十部。它的演员阵容包括埃迪·雷德梅恩、凯瑟琳·沃特斯顿、丹·福格勒、艾莉森·苏朵尔、以斯拉·米勒、佐伊·克拉维茨、卡勒姆·特纳、克劳迪娅·金、威廉·纳迪拉姆、凯文·格思里、裘德·洛和约翰尼·德普。故事背景设定在 1927 年，讲述纽特·斯卡曼德和阿不思·邓布利多试图击败黑巫师盖勒特·格林德沃，同时在一个更加分裂的魔法世界中面临新的威胁",
          releaseDay: "2018-11-16T00:00:00",
          actors:
            "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.showing,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0011",
          nameVN: "SINH VẬT HUYỀN BÍ: NHỮNG BÍ MẬT CỦA DUMBLEDORE",
          nameENG: "Fantastic Beasts: The Secrets of Dumbledore",
          nameCH: "神奇动物：邓布利多的秘密",
          trailer: "https://www.youtube.com/embed/DRc7YVRF6MY",
          image: "",
          duration: "230",
          descVN:
            "Câu chuyện của phần phim thứ ba này xoay quanh việc Giáo sư Albus Dumbledore (Jude Law) phát hiện ra việc Phù thủy Bóng tối quyền năng Gellert Grindelwald (Mads Mikkelsen) đang âm mưu chiếm lấy quyền kiểm soát Thế giới Phù thủy. Không thể một mình ngăn chặn đoàn quân hùng mạnh của của Grindelwald, Dumbledore đặt niềm tin vào Nhà nghiên cứu sinh vật huyền bí Newt Scamander (Eddie Redmayne) cùng đồng đội thực hiện nhiệm vụ đầy hiểm nguy này. Trong tình thế ngàn cân treo sợi tóc như vậy, liệu thầy Dumbledore có thể đứng ngoài được bao lâu?",
          descENG:
            "The story of this third film revolves around Professor Albus Dumbledore (Jude Law) discovering that the powerful Dark Wizard Gellert Grindelwald (Mads Mikkelsen) is plotting to take control of the Wizarding World. Unable to stop Grindelwald's mighty army alone, Dumbledore places his trust in Paranormal Researcher Newt Scamander (Eddie Redmayne) and his teammates to carry out this dangerous mission. How long can Dumbledore stay out in a situation like that, hanging by a hair?",
          descCH:
            "这第三部电影的故事围绕着阿不思·邓布利多教授（裘德·洛饰）发现强大的黑巫师盖勒特·格林德沃（麦德斯·米克尔森饰）正在密谋控制魔法世界。无法单独阻止格林德沃强大的军队，邓布利多信任超自然现象研究员纽特·斯卡曼德（埃迪·雷德梅恩饰）和他的队友来执行这项危险的任务。在这种情况下，邓布利多能在外面呆多久？",
          releaseDay: "2022-04-08T00:00:00",
          actors:
            "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol",
          director: "David Yates",
          type: movieType.adventure,
          country: movieCountry.england,
          status: movieStatus.comming,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0012",
          nameVN: "NGƯỜI KHỞI LỬA",
          nameENG: "Firestarter",
          nameCH: "起火者",
          trailer: "https://www.youtube.com/embed/21rAuAZ-0TI",
          image: "",
          duration: "230",
          descVN:
            "Firestarter là một bộ phim kinh dị khoa học viễn tưởng Mỹ năm 2022 của đạo diễn Keith Thomas, từ kịch bản của Scott Teems, dựa trên tiểu thuyết cùng tên của Stephen King. Nó là một phiên bản làm lại của bộ phim chuyển thể năm 1984 cùng tên. Phim có sự tham gia của Zac Efron, Ryan Kiera Armstrong, Sydney Lemmon, Kurtwood Smith, John Beasley, Michael Greyeyes và Gloria Reuben. Nó được sản xuất bởi Jason Blum và Akiva Goldsman dưới biểu ngữ Blumhouse Productions và Weed Road Pictures của họ, cùng với BoulderLight Pictures và Angry Adam Picture",
          descENG:
            "Firestarter is a 2022 American science fiction thriller film directed by Keith Thomas, from a screenplay by Scott Teems, based on the novel of the same name by Stephen King. It is a remake of the 1984 film adaptation of the same name. The film stars Zac Efron, Ryan Kiera Armstrong, Sydney Lemmon, Kurtwood Smith, John Beasley, Michael Greyeyes, and Gloria Reuben. It is produced by Jason Blum and Akiva Goldsman under their Blumhouse Productions and Weed Road Pictures banners, respectively, alongside BoulderLight Pictures and Angry Adam Picture",
          descCH:
            "Firestarter 是一部 2022 年美国科幻惊悚片，由基思·托马斯执导，斯科特·蒂姆斯编剧，改编自斯蒂芬·金的同名小说。翻拍自1984年同名电影。这部电影由扎克·埃夫隆、瑞恩·基拉·阿姆斯特朗、悉尼·莱蒙、库尔特伍德·史密斯、约翰·比斯利、迈克尔·格雷耶斯和格洛丽亚·鲁本主演。它由 Jason Blum 和 Akiva Goldsman 分别在 Blumhouse Productions 和 Weed Road Pictures 旗下制作，同时还有 BoulderLight Pictures 和 Angry Adam Picture",
          releaseDay: "2022-05-13T00:00:00",
          actors:
            "Zac Efron, Ryan Kiera Armstrong, Sydney Lemmon, Kurtwood Smith ",
          director: "Keith Thomas",
          status: movieStatus.comming,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0013",
          nameVN: "ÁM ẢNH KINH HOÀNG",
          nameENG: "The Conjuring",
          nameCH: "魔术师",
          trailer: "https://www.youtube.com/embed/9YLiAy7CQhw",
          image: "",
          duration: "230",
          descVN:
            "Ám ảnh kinh hoàng là một bộ phim kinh dị siêu nhiên của Mỹ năm 2013 do James Wan đạo diễn và Chad Hayes và Carey W. Hayes viết kịch bản. Đây là bộ phim đầu tiên trong loạt phim Conjuring Universe. Patrick Wilson và Vera Farmiga đóng vai chính Ed và Lorraine Warren, những nhà điều tra và tác giả huyền bí liên quan đến những vụ án ma ám nổi tiếng. Các báo cáo thực tế có chủ đích của họ đã truyền cảm hứng cho câu chuyện Kinh dị Amityville và nhượng quyền phim. Warrens đến với sự trợ giúp của gia đình Perron, những người đã trải qua những sự kiện ngày càng đáng lo ngại trong trang trại của họ ở Rhode Island vào năm 1971",
          descENG:
            "The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes. It is the inaugural film in the Conjuring Universe franchise. Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting. Their purportedly real-life reports inspired The Amityville Horror story and film franchise. The Warrens come to the assistance of the Perron family, who experienced increasingly disturbing events in their farmhouse in Rhode Island in 1971",
          descCH:
            "魔术师是一部 2013 年的美国超自然恐怖电影，由 James Wan 执导，Chad Hayes 和 Carey W. Hayes 编剧。这是魔法宇宙系列的首部电影。帕特里克·威尔逊和维拉·法米加饰演艾德和洛林·沃伦，他们是与著名的闹鬼案件有关的超自然现象调查员和作者。据称，他们的真实报道激发了 The Amityville Horror 故事和电影专营权。沃伦一家寻求佩伦家族的帮助，他们在 1971 年在罗德岛的农舍里经历了越来越多令人不安的事件。",
          releaseDay: "2013-09-06T00:00:00",
          actors: "Patrick Wilson, Vera Farmiga",
          director: "James Wan",
          status: movieStatus.showing,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0014",
          nameVN: "ÁM ẢNH KINH HOÀNG 2",
          nameENG: "The Conjuring 2",
          nameCH: "魔术师 2",
          trailer: "https://www.youtube.com/embed/9YLiAy7CQhw",
          image: "",
          duration: "230",
          descVN:
            "Ám ảnh kinh hoàng 2 (được biết đến tại Vương quốc Anh với tên The Conjuring 2: Vụ án Enfield) là một bộ phim kinh dị siêu nhiên của Mỹ năm 2016, do James Wan làm đạo diễn. Kịch bản do Chad Hayes, Carey W. Hayes, Wan và David Leslie Johnson thực hiện. Đây là phần tiếp theo của The Conjuring năm 2013, phần thứ hai trong loạt phim The Conjuring và phần thứ ba trong loạt phim Vũ trụ Conjuring. Patrick Wilson và Vera Farmiga đóng lại vai trò của họ như những nhà điều tra và tác giả huyền bí Ed và Lorraine Warren từ bộ phim đầu tiên. Bộ phim theo chân các Warrens khi họ đến Anh để hỗ trợ gia đình Hodgson, những người đang trải qua hoạt động chống chủ nghĩa bảo vệ tại nhà hội đồng Enfield của họ vào năm 1977, nơi sau này được gọi là người chống chủ nghĩa đánh bóng Enfield.",
          descENG:
            "The Conjuring 2 (known in the United Kingdom as The Conjuring 2: The Enfield Case) is a 2016 American supernatural horror film, directed by James Wan. The screenplay is by Chad Hayes, Carey W. Hayes, Wan, and David Leslie Johnson. It is the sequel to 2013's The Conjuring, the second installment in The Conjuring series, and the third installment in the Conjuring Universe franchise. Patrick Wilson and Vera Farmiga reprise their roles as paranormal investigators and authors Ed and Lorraine Warren from the first film. The film follows the Warrens as they travel to England to assist the Hodgson family, who are experiencing poltergeist activity at their Enfield council house in 1977 which later became referred to as the Enfield poltergeist.",
          descCH:
            "魔术师 2（在英国被称为 The Conjuring 2: The Enfield Case）是一部 2016 年的美国超自然恐怖电影，由 James Wan 执导。剧本由查德·海斯、凯莉·W·海斯、万和大卫·莱斯利·约翰逊编写。它是 2013 年 The Conjuring 的续集，是 The Conjuring 系列的第二部，也是 Conjuring Universe 系列的第三部。帕特里克·威尔逊和维拉·法米加在第一部电影中重新扮演了超自然现象调查员和作家埃德和洛林·沃伦的角色。这部电影讲述了沃伦一家前往英格兰协助霍奇森一家的故事，他们于 1977 年在他们的恩菲尔德议会大厦经历了恶作剧活动，后来被称为恩菲尔德恶作剧。",
          releaseDay: "2016-06-10T00:00:00",
          actors: "Patrick Wilson, Vera Farmiga",
          director: "James Wan",
          status: movieStatus.showing,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0015",
          nameVN: "ÁM ẢNH KINH HOÀNG: MA XUI QUỶ KHIẾN",
          nameENG: "The Conjuring: The Devil Made Me Do It",
          nameCH: "魔术师: ",
          trailer: "https://www.youtube.com/embed/9YLiAy7CQhw",
          image: "",
          duration: "230",
          descVN:
            "The Conjuring: The Devil Made Me Do It (còn được gọi là The Conjuring 3) là một bộ phim kinh dị siêu nhiên của Mỹ năm 2021 do Michael Chaves đạo diễn, với kịch bản của David Leslie Johnson-McGoldrick từ một câu chuyện của Johnson-McGoldrick và James Wan. Bộ phim đóng vai trò là phần tiếp theo của The Conjuring (2013) và The Conjuring 2 (2016), và là phần thứ tám trong Vũ trụ Conjuring. Patrick Wilson và Vera Farmiga thể hiện lại vai trò của họ trong vai các nhà điều tra và tác giả huyền bí Ed và Lorraine Warren, với Ruairi O'Connor, Sarah Catherine Hook và Julian Hilliard cũng đóng vai chính. Wan và Peter Safran trở lại sản xuất bộ phim dựa trên phiên tòa xét xử Arne Cheyenne Johnson, một phiên tòa xét xử tội phạm giết người diễn ra vào năm 1981 tại Connecticut, ngoài The Devil in Connecticut, một cuốn sách về phiên tòa do Gerald Brittle viết.",
          descENG:
            "The Conjuring: The Devil Made Me Do It (also known as The Conjuring 3) is a 2021 American supernatural horror film directed by Michael Chaves, with a screenplay by David Leslie Johnson-McGoldrick from a story by Johnson-McGoldrick and James Wan. The film serves as a sequel to The Conjuring (2013) and The Conjuring 2 (2016), and as the eighth installment in the Conjuring Universe. Patrick Wilson and Vera Farmiga reprise their roles as paranormal investigators and authors Ed and Lorraine Warren, with Ruairi O'Connor, Sarah Catherine Hook, and Julian Hilliard also starring. Wan and Peter Safran return to produce the film, which is based on the trial of Arne Cheyenne Johnson, a murder trial that took place in 1981 Connecticut, in addition to The Devil in Connecticut, a book about the trial written by Gerald Brittle.",
          descCH:
            "The Conjuring: The Devil Made Me Do It（也称为 The Conjuring 3）是一部 2021 年美国超自然恐怖电影，由迈克尔·查韦斯执导，大卫·莱斯利·约翰逊-麦戈德里克根据约翰逊-麦戈德里克和詹姆斯·万的故事改编剧本。这部电影是《招魂》（2013 年）和《招魂 2》（2016 年）的续集，也是《招魂》宇宙的第八部。帕特里克·威尔逊和维拉·法米加再次扮演超自然现象调查员和作家埃德和洛林·沃伦的角色，鲁艾里·奥康纳、莎拉·凯瑟琳·胡克和朱利安·希利亚德也主演。 Wan 和 Peter Safran 回归制作这部电影，该电影基于 1981 年康涅狄格州发生的谋杀案审判 Arne Cheyenne Johnson，以及 Gerald Brittle 撰写的关于审判的书《康涅狄格州的魔鬼》。",
          releaseDay: "2021-06-04T00:00:00",
          actors: "Patrick Wilson, Vera Farmiga",
          director: "Michael Chaves",
          status: movieStatus.comming,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0016",
          nameVN: "RỪNG SĂN NGƯỜI",
          nameENG: "Warhunt",
          nameCH: "猎战",
          trailer: "https://www.youtube.com/embed/BRXHdMcU_co",
          image: "",
          duration: "230",
          descVN:
            "Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Nhưng mọi thứ không đơn giản như thế, họ đã tiến vào một vùng đất chất, nơi quỷ dữ thống trị và điều khiển mọi thứ. Đặc biệt, phim có sự góp mặt của Mickey Rourke, phản diện chính từ Iron Man 2.",
          descENG:
            "A detachment is sent into the jungle to find top secret documents and missing comrades. But things are not so simple, they have entered a land of substance, where the devil rules and controls everything. In particular, the film features Mickey Rourke, the main villain from Iron Man 2.",
          descCH:
            "一支分队被派到丛林中寻找绝密文件和失踪的同志。但事情并没有那么简单，他们已经进入了一个物质的土地，那里是魔鬼统治和控制着一切的地方。特别是，这部电影以钢铁侠2中的主要反派米基洛克为主角。",
          releaseDay: "2022-05-13T00:00:00",
          actors:
            "Mickey Rourke, Robert Knepper, Robert Kneppe, Polina Pushkareva[",
          director: "Mauro Borrelli",
          status: movieStatus.comming,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0017",
          nameVN: "JOHN WICK",
          nameENG: "John Wick",
          nameCH: "约翰威克",
          trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
          image: "",
          duration: "230",
          descVN:
            "John Wick là một bộ phim kinh dị hành động tân phi của Mỹ năm 2014 của đạo diễn Chad Stahelski, trong lần đầu làm đạo diễn của ông, và do Derek Kolstad viết kịch bản. Phim có sự tham gia của Keanu Reeves trong vai chính, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo và Willem Dafoe. Đây là phần đầu tiên trong loạt phim John Wick. Câu chuyện tập trung vào việc John Wick tìm kiếm những người đàn ông đã đột nhập vào nhà anh ta, đánh cắp chiếc xe hơi cổ và giết chết con chó con của anh ta, đây là món quà cuối cùng anh ta từ người vợ mới qua đời của anh ta.",
          descENG:
            "John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves in the lead role, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise. The story focuses on John Wick searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.",
          descCH:
            "《约翰威克》是一部 2014 年美国新黑色动作惊悚片，由查德·斯塔赫尔斯基执导，在他的导演处女作中，由德里克·科尔斯塔德编剧。它由基努·里维斯主演，迈克尔·奈奎斯特、阿尔菲·艾伦、阿德里安·帕里奇、布里奇特·莫伊纳汉、迪恩·温特斯、伊恩·麦克肖恩、约翰·雷吉扎莫和威廉·达福。这是约翰威克系列的第一部。故事的重点是约翰威克寻找闯入他家，偷走他的老爷车并杀死他的小狗的人，这是他最近去世的妻子送给他的最后礼物",
          releaseDay: "2014-10-24T00:00:00",
          actors: "Keanu Reeves, Ian McShane",
          director: "Chad Stahelski",
          status: movieStatus.showing,
          type: movieType.action,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0018",
          nameVN: "JOHN WICK 2",
          nameENG: "John Wick: Chapter 2",
          nameCH: "约翰威克：第 2 章",
          trailer: "https://www.youtube.com/embed/XGk2EfbD_Ps",
          image: "",
          duration: "230",
          descVN:
            "John Wick: Chapter 2 (còn được gọi đơn giản là John Wick 2) là một bộ phim kinh dị hành động tân phi của Mỹ năm 2017 do Chad Stahelski đạo diễn và Derek Kolstad viết kịch bản. Đây là phần thứ hai trong loạt phim John Wick và là phần tiếp theo của phim hành động John Wick năm 2014. Phim có sự tham gia của Keanu Reeves trong vai chính, Common, Laurence Fishburne, Riccardo Scamarcio, Ruby Rose, John Leguizamo và Ian McShane. Cốt truyện kể về tay sát thủ đã nghỉ hưu John Wick (Reeves), người bị buộc phải quay trở lại cuộc sống cũ của mình để thực hiện lời thề huyết thống với một tên tội phạm người Ý. Buổi chụp ảnh chính bắt đầu vào ngày 26 tháng 10 năm 2015, tại Thành phố New York.",
          descENG:
            "John Wick: Chapter 2 (also known as simply John Wick 2) is a 2017 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad. It is the second installment in the John Wick franchise and the sequel to the 2014 action film John Wick. It stars Keanu Reeves in the lead role, Common, Laurence Fishburne, Riccardo Scamarcio, Ruby Rose, John Leguizamo, and Ian McShane. The plot follows retired hitman John Wick (Reeves), who is forced back into his old life to fulfill a blood oath to an Italian crime lord. Principal photography began on October 26, 2015, in New York City.",
          descCH:
            "约翰威克：第 2 章（也简称为约翰威克 2）是一部 2017 年美国新黑色动作惊悚片，由查德斯塔赫尔斯基执导，德里克科尔斯塔德编剧。这是约翰威克系列的第二部，也是 2014 年动作片约翰威克的续集。它由基努·里维斯主演，共同主演、劳伦斯·菲什伯恩、里卡多·斯卡马西奥、鲁比·罗斯、约翰·雷吉扎莫和伊恩·麦克肖恩。剧情跟随退休的杀手约翰威克（里夫斯），他被迫回到他的旧生活，以履行对意大利犯罪领主的血誓。主体拍摄于 2015 年 10 月 26 日在纽约市开始。",
          releaseDay: "2017-02-10T00:00:00",
          actors: "Keanu Reeves, Ian McShane",
          director: "Chad Stahelski",
          status: movieStatus.showing,
          type: movieType.action,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0019",
          nameVN: "JOHN WICK 3: CHUẨN BỊ CHIẾN TRANH",
          nameENG: "John Wick: Chapter 3 - Parabellum",
          nameCH: "约翰威克：第 3 章 - 帕拉贝鲁姆",
          trailer: "https://www.youtube.com/embed/pU8-7BX9uxs",
          image: "",
          duration: "230",
          descVN:
            "John Wick: Chương 3 - Parabellum (còn được gọi là John Wick: Chương 3 hoặc đơn giản là John Wick 3) là một bộ phim kinh dị hành động tân cổ điển của Mỹ năm 2019 do Chad Stahelski đạo diễn và được viết bởi Derek Kolstad, Shay Hatten, Chris Collins và Marc Abrams, dựa trên một câu chuyện của Kolstad. Đây là phần tiếp theo của John Wick (2014) và John Wick: Chương 2 (2017), và là phần thứ ba trong loạt phim John Wick. Phim có sự tham gia của Keanu Reeves trong vai nhân vật cùng tên, cùng với Halle Berry, Laurence Fishburne, Mark Dacascos, Asia Kate Dillon, Lance Reddick, Anjelica Huston và Ian McShane. Trong phim, John Wick chạy trốn khỏi một quân đoàn sát thủ sau khi một khoản tiền thưởng được đặt cho tội giết người của anh ta",
          descENG:
            "John Wick: Chapter 3 – Parabellum (alternatively known as John Wick: Chapter 3 or simply John Wick 3) is a 2019 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad, Shay Hatten, Chris Collins, and Marc Abrams, based on a story by Kolstad. It is the sequel to John Wick (2014) and John Wick: Chapter 2 (2017), and is the third installment in the John Wick franchise. It stars Keanu Reeves as the eponymous character, alongside Halle Berry, Laurence Fishburne, Mark Dacascos, Asia Kate Dillon, Lance Reddick, Anjelica Huston, and Ian McShane. In the film, John Wick goes on the run from a legion of assassins after a bounty is placed for his murder",
          descCH:
            "约翰威克：第 3 章 – 帕拉贝鲁姆（也称为约翰威克：第 3 章或简称为约翰威克 3）是一部 2019 年美国新黑色动作惊悚片，由查德斯塔赫斯基执导，德里克科尔斯塔德、谢伊哈滕、克里斯柯林斯和马克编剧艾布拉姆斯，根据科尔斯塔的故事改编。它是约翰威克（2014 年）和约翰威克：第 2 章（2017 年）的续集，是约翰威克系列的第三部。它将基努·里维斯与哈莉·贝瑞、劳伦斯·菲什伯恩、马克·达卡斯科斯、艾西亚·凯特·狄龙、兰斯·雷迪克、安杰丽卡·休斯顿和伊恩·麦克肖恩一起出演同名角色。在电影中，约翰威克在悬赏谋杀案后逃离了一群刺客",
          releaseDay: "2019-05-17T00:00:00",
          actors: "Keanu Reeves, Halle Berry, Ian McShane",
          director: "Chad Stahelski",
          status: movieStatus.comming,
          type: movieType.action,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0020",
          nameVN: "NHÍM SONIC 2",
          nameENG: "Sonic the Hedgehog 2",
          nameCH: "刺猬索尼克2",
          trailer: "https://www.youtube.com/embed/JmJfFmoMDwE",
          image: "",
          duration: "230",
          descVN:
            "Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?",
          descENG:
            "When Robotnik successfully manages to return to Earth, he has a new ally in the mighty Knuckles, can Sonic and his friend Tails stop the mad plot to save the world?",
          descCH:
            "当Robotnik成功返回地球时，他在强大的Knuckles中有了新的盟友，Sonic和他的朋友Tails能否阻止疯狂的拯救世界的阴谋",
          releaseDay: "2022-04-09T00:00:00",
          actors:
            "Ben Schwartz ,Idris Elba , Colleen O'Shaughnessey, Jim Carrey, James Marsden, Tika Sumpter",
          director: "Jeff Fowler",
          status: movieStatus.comming,
          type: movieType.comedy,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0021",
          nameVN: "LIÊN MINH CÔNG LÝ (ZACK SNYDER)",
          nameENG: "Zack Snyder's Justice League",
          nameCH: "扎克施奈德的正义联盟",
          trailer: "https://www.youtube.com/embed/vM-Bja2Gy04",
          image: "",
          duration: "230",
          descVN:
            "Justice League của Zack Snyder, thường được gọi là 'Snyder Cut', là phần cắt của đạo diễn năm 2021 về bộ phim siêu anh hùng Mỹ năm 2017 Justice League. Nó giới thiệu Justice League — bộ phim thứ năm của Vũ trụ Mở rộng DC (DCEU) và tiếp theo Batman v Superman: Dawn of Justice - Ultimate Edition (2016) — như đạo diễn Zack Snyder đã dự định trước khi rời khỏi bộ phim. Giống như bản ra rạp, Justice League của Zack Snyder theo sau Justice League DC Comics — Batman (Ben Affleck), Superman (Henry Cavill), Wonder Woman (Gal Gadot), Cyborg (Ray Fisher), Aquaman (Jason Momoa) và the Flash (Ezra Miller) - khi họ cố gắng giải cứu thế giới khỏi mối đe dọa thảm khốc của Darkseid (Ray Porter), Steppenwolf (Ciarán Hinds), và đội quân Parademons của họ.",
          descENG:
            "Zack Snyder's Justice League, often referred to as the 'Snyder Cut', is the 2021 director's cut of the 2017 American superhero film Justice League. It presents Justice League—the fifth film of the DC Extended Universe (DCEU) and follow-up to Batman v Superman: Dawn of Justice – Ultimate Edition (2016)—as director Zack Snyder intended it before he left the production. Like the theatrical release, Zack Snyder's Justice League follows the DC Comics Justice League—Batman (Ben Affleck), Superman (Henry Cavill), Wonder Woman (Gal Gadot), Cyborg (Ray Fisher), Aquaman (Jason Momoa), and the Flash (Ezra Miller)—as they attempt to save the world from the catastrophic threat of Darkseid (Ray Porter), Steppenwolf (Ciarán Hinds), and their army of Parademons.",
          descCH:
            "扎克施奈德的正义联盟，通常被称为“斯奈德剪辑版”，是 2017 年美国超级英雄电影正义联盟的 2021 年导演剪辑版。它展示了正义联盟——DC 扩展宇宙 (DCEU) 的第五部电影，以及蝙蝠侠大战超人：正义黎明 - 终极版 (2016) 的后续电影——正如导演扎克·斯奈德在离开制作之前所打算的那样。与剧场版一样，扎克·施奈德的正义联盟遵循 DC 漫画正义联盟——蝙蝠侠（本·阿弗莱克）、超人（亨利·卡维尔）、神奇女侠（盖尔·加朵）、钢骨（雷·费舍尔）、海王（杰森·莫玛）和闪电侠（以斯拉·米勒饰）——他们试图从达克赛德（雷·波特饰）、荒原狼（夏兰·海因兹饰）和他们的幻兽大军的灾难性威胁中拯救世界。",
          releaseDay: "2021-03-18T00:00:00",
          actors:
            "Henry Cavill, Gal Gadot, Ben Affleck, Ezra Miller, Jason Momoa, Ray Fisher",
          director: "Zack Snyder",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0022",
          nameVN: "NGƯỜI DƠI",
          nameENG: "THE BATMAN",
          nameCH: "蝙蝠侠",
          trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
          image: "",
          duration: "230",
          descVN:
            "Batman phiêu lưu vào thế giới ngầm của Thành phố Gotham khi một kẻ giết người tàn bạo để lại dấu vết của manh mối khó hiểu. Khi bằng chứng bắt đầu dẫn đến gần nhà hơn và quy mô kế hoạch của thủ phạm trở nên rõ ràng, anh ta phải tạo dựng các mối quan hệ mới, vạch mặt thủ phạm và đưa ra công lý cho việc lạm dụng quyền lực và tham nhũng đã gây ra từ lâu cho thành phố.",
          descENG:
            "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis",
          descCH:
            "当一名虐待狂杀手留下一串神秘线索时，蝙蝠侠冒险进入哥谭市的地下世界。随着证据开始离家越来越近，肇事者计划的规模变得清晰，他必须建立新的关系，揭开罪魁祸首，为长期困扰大都市的滥用权力和腐败伸张正义",
          releaseDay: "2022-03-04T00:00:00",
          actors:
            "Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey Wright, Colin Farrell",
          director: "Matt Reeves",
          status: movieStatus.comming,
          type: movieType.action,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0023",
          nameVN: "SPIDER MAN NO WAY HOME",
          nameENG: "SPIDER MAN NO WAY HOME",
          nameCH: "蜘蛛侠无路可归",
          trailer: "https://www.youtube.com/embed/OB3g37GTALc&t=1s",
          image: "",
          duration: "230",
          descVN:
            "Peter Parker tìm kiếm sự giúp đỡ của Doctor Strange để khiến mọi người quên đi thân phận của Người nhện. Tuy nhiên, khi câu thần chú anh ta sử dụng bị hỏng, một số vị khách không mong muốn bước vào vũ trụ của họ.",
          descENG:
            "Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.",
          descCH:
            "彼得帕克寻求奇异博士的帮助，让人们忘记蜘蛛侠的身份。然而，当他施放的咒语被破坏时，几个不受欢迎的客人进入了他们的宇宙。",
          releaseDay: "2021-12-17T00:00:00",
          actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
          director: "Jon Watts",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0024",
          nameVN: "TIA CHỚP",
          nameENG: "THE FLASH",
          nameCH: "闪电侠",
          trailer: "https://www.youtube.com/embed/drQWopZDEEY",
          image: "",
          duration: "230",
          descVN:
            "The Flash là một bộ phim siêu anh hùng sắp tới của Mỹ dựa trên nhân vật cùng tên của DC Comics. Được sản xuất bởi DC Films, Double Dream và The Disco Factory, và được Warner Bros. Pictures phân phối, đây được dự định là bộ phim thứ mười bốn trong Vũ trụ Mở rộng DC (DCEU). Phim do Andy Muschietti đạo diễn với kịch bản của Christina Hodson và có sự tham gia của Ezra Miller trong vai Barry Allen / The Flash cùng với Ron Livingston, Michael Keaton, Kiersey Clemons, Michael Shannon, Antje Traue, Sasha Calle và Ben Affleck. Trong phim, Barry du hành ngược thời gian để ngăn chặn việc mẹ mình bị sát hại mang đến hậu quả khôn lường",
          descENG:
            "The Flash is an upcoming American superhero film based on the DC Comics character of the same name. Produced by DC Films, Double Dream, and The Disco Factory, and set for distribution by Warner Bros. Pictures, it is intended to be the fourteenth film in the DC Extended Universe (DCEU). The film is directed by Andy Muschietti from a screenplay by Christina Hodson and stars Ezra Miller as Barry Allen / The Flash alongside Ron Livingston, Michael Keaton, Kiersey Clemons, Michael Shannon, Antje Traue, Sasha Calle, and Ben Affleck. In the film, Barry travels back in time to prevent his mother's murder, which brings unintended consequences",
          descCH:
            "《闪电侠》是一部即将上映的美国超级英雄电影，改编自 DC 漫画同名角色。由 DC Films、Double Dream 和 The Disco Factory 制作，由华纳兄弟影业公司发行，旨在成为 DC 扩展宇宙 (DCEU) 中的第 14 部电影。这部电影由安迪·穆斯切蒂执导，克里斯蒂娜·霍德森编剧，埃兹拉·米勒饰演巴里·艾伦/闪电侠，与罗恩·利文斯顿、迈克尔·基顿、基尔西·克莱蒙斯、迈克尔·香农、安杰·特劳、萨沙·卡勒和本·阿弗莱克一起出演。在影片中，巴里穿越时空，阻止了他母亲的谋杀，这带来了意想不到的后果",
          releaseDay: "2022-11-04T00:00:00",
          actors: "Ezra Miller, Michael Keaton, Sasha Calle, Ben Affleck",
          director: "Andy Muschietti",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0025",
          nameVN: "THẾ GIỚI KHỦNG LONG: LÃNH ĐỊA",
          nameENG: "Jurassic World Dominion",
          nameCH: "恐龙世界：陆地",
          trailer: "https://www.youtube.com/embed/wPOKNuV9BT0",
          image: "",
          duration: "230",
          descVN:
            "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình?",
          descENG:
            "Four years after the end of Jurassic World: Fallen Kingdom, the dinosaurs have escaped their captivity and entered the human world. Now, they appear everywhere. That huge creature was no longer just on the island as before, but close in front of his eyes, even touching it. Owen Grady was lucky to meet the dinosaur that he and the audience loved so much - Blue. However, Blue does not go alone, but also brings another baby dinosaur. This made Owen even more determined to protect her mother and her children to live safely. However, the two species are too different. Can an era where dinosaurs and humans coexist peacefully?",
          descCH:
            "侏罗纪世界：堕落王国结束四年后，恐龙逃脱了囚禁并进入了人类世界。现在，它们无处不在。那个巨大的生物不再像以前那样只是在岛上，而是靠近他的眼前，甚至触摸它。欧文格雷迪很幸运地遇到了他和观众都非常喜欢的恐龙——蓝色。不过，小蓝并不是一个人去，还带来了另一只小恐龙。这让欧文更加坚定了要保护她的母亲和她的孩子过上安全的生活。然而，这两个物种太不同了。一个恐龙与人类和平共处的时代能否实现？",
          releaseDay: "2022-06-10T00:00:00",
          actors:
            "Chris Pratt, Bryce Dallas Howard, Laura Dern, Sam Neill, Jeff Goldblum",
          director: "Colin Trevorrow",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0026",
          nameVN: "CẢNH SÁT VŨ TRỤ LIGHTYEAR",
          nameENG: "LIGHTYEAR SPACE POLICE",
          nameCH: "光年太空警察",
          trailer: "https://www.youtube.com/embed/hB_JdXDnZVQ",
          image: "",
          duration: "230",
          descVN:
            "Bộ phim kể về chuyến hành trình hành động kết hợp khoa học viễn tưởng nhằm giới thiệu câu chuyện về nguồn gốc của nhân vật Buzz Lightyear — người anh hùng đã truyền cảm hứng sáng tạo ra đồ chơi. “Lightyear” sẽ theo chân Cảnh Sát Vũ Trụ huyền thoại trong cuộc hành trình bước ra ngoài không gian cùng với một nhóm chiến binh đầy tham vọng và người bạn đồng hành là chú mèo máy Sox.",
          descENG:
            "The film follows an action-packed sci-fi adventure that introduces the origin story of Buzz Lightyear — the hero who inspired the creation of toys. 'Lightyear' will follow the legendary Space Police on a journey into space with a group of aspiring warriors and their companion, the robotic cat Sox.",
          descCH:
            "这部电影讲述了一部动感十足的科幻冒险片，介绍了巴斯光年的起源故事——这位英雄启发了玩具的创造。 《光年》将跟随传奇的太空警察与一群有抱负的战士和他们的伙伴机器猫 Sox 一起进入太空.",
          releaseDay: "2022-06-17T00:00:00",
          actors: "Chris Evans, Keke Palmer, James Brolin",
          director: "Angus MacLane",
          status: movieStatus.comming,
          type: movieType.action,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0027",
          nameVN: "ĐIỆN THOẠI ĐEN",
          nameENG: "The Black Phone",
          nameCH: "黑色电话",
          trailer: "https://www.youtube.com/embed/oJr_dYFUaCM",
          image: "",
          duration: "230",
          descVN:
            "Finney Shaw, một cậu bé 13 tuổi nhút nhát nhưng thông minh, bị một kẻ giết người tàn bạo bắt cóc và nhốt trong một tầng hầm cách âm, nơi tiếng la hét trở nên vô ích. Khi một chiếc điện thoại bị ngắt kết nối trên tường bắt đầu đổ chuông, Finney phát hiện ra rằng cậu có thể nghe thấy giọng nói từ những nạn nhân trước đây của kẻ giết người. Và họ đã cố gắng đảm bảo rằng những gì đã xảy ra với họ không xảy ra với Finney.",
          descENG:
            "Finney Shaw, a shy but intelligent 13-year-old boy, is kidnapped by a sadistic killer and locked in a soundproof basement, where screaming becomes futile. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear voices from previous victims of the killer. And they tried to make sure that what happened to them didn't happen to Finney.",
          descCH:
            "Finney Shaw，一个害羞但聪明的 13 岁男孩，被一个虐待狂的杀手绑架并被锁在隔音的地下室，在那里尖叫变得徒劳。当墙上断开的电话开始响起时，芬尼发现他可以听到凶手以前受害者的声音。他们试图确保发生在他们身上的事情不会发生在芬尼身上。",
          releaseDay: "2022-06-24T00:00:00",
          actors: "Ethan Hawke, Mason Thames, Madeleine McGraw",
          director: "Scott Derrickson",
          status: movieStatus.comming,
          type: movieType.horror,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0028",
          nameVN: "AVATAR: DÒNG CHẢY CỦA NƯỚC",
          nameENG: "Avatar: The Way of Water",
          nameCH: "阿凡达：水的流动",
          trailer: "https://www.youtube.com/embed/S3dNmMZE9sc",
          image: "",
          duration: "230",
          descVN:
            "Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.",
          descENG:
            "The story of 'Avatar: The Way of Water' is set 10 years after the events of the first part. The film tells the story of the new family of Jake Sully (played by Sam Worthington) and the troubles that follow and the tragedy they have to endure when the human side invades the planet Pandora.",
          descCH:
            "《阿凡达：水之流》的故事设定在第一部事件的 10 年后。影片讲述了杰克·萨利（Sam Worthington 饰）新家族的故事，以及人类入侵潘多拉星球时他们不得不忍受的麻烦和悲剧。",
          releaseDay: "2022-12-16T00:00:00",
          actors: "Sam Worthington, Zoe Saldaña",
          director: "James Cameron",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0029",
          nameVN: "LIÊN MINH SIÊU THÚ DC",
          nameENG: "DC League of Super-Pets",
          nameCH: "DC 超级宠物联盟",
          trailer: "https://www.youtube.com/embed/o3bc3RXi0Tc",
          image: "",
          duration: "230",
          descVN:
            "Trong “Liên Minh Siêu Thú DC”, Siêu Cún Krypto và Superman là cặp bài trùng không thể tách rời, cùng sở hữu những siêu năng lực tương tự và cùng nhau chiến đấu chống lại tội phạm tại thành phố Metropolis. Khi Superman và những thành viên của Liên Minh Công Lý bị bắt cóc, Krypto phải thuyết phục cậu chàng Ace luộm thuộm, nàng Heo PB, Rùa Merton và Sóc Chip khai phá những sức mạnh tiềm ẩn và cùng nhau giải cứu các siêu anh hùng. “Liên Minh Siêu Thú DC” có sự góp giọng của bộ đôi ngôi sao nổi tiếng bậc nhất Hollywood Dwayne Johnson (lồng tiếng cho Siêu cún Krypto) và Kevin Hart (Superman). Đặc biệt, tài tử Keanu Reeves sẽ đảm nhận những câu thoại chất lừ đến từ Batman.",
          descENG:
            "In 'DC League of Super-Pets', Super Dog Krypto and Superman are an inseparable pair, possessing similar superpowers and fighting crime together in Metropolis city. When Superman and the Justice League members are kidnapped, Krypto must convince sloppy Ace, PB Pig, Merton Tortoise, and Soc Chip to unlock their hidden powers and rescue the superheroes together. 'DC League of Super-Pets' features the voice of the most famous Hollywood star duo Dwayne Johnson (voice of Super Dog Krypto) and Kevin Hart (Superman). In particular, actor Keanu Reeves will take on the excellent lines from Batman.",
          descCH:
            "在《DC超兽联盟》中，超狗氪与超人是形影不离的一对，拥有相似的超能力，在大都会共同打击犯罪。当超人和正义联盟成员被绑架时，Krypto 必须说服邋遢的 Ace、PB Pig、Merton Tortoise 和 Soc Chip 解开他们隐藏的力量，一起拯救超级英雄。 “DC 超级动物联盟”由最著名的好莱坞明星二人组道恩·强森（Super Dog Krypto 配音）和凯文·哈特（超人）配音。特别是演员基努·里维斯将演绎蝙蝠侠的精彩台词。",
          releaseDay: "2022-05-20T00:00:00",
          actors: "Dwayne Johnson, Kevin Hart, Keanu Reeves",
          director: "Jared Stern",
          status: movieStatus.comming,
          type: movieType.comedy,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0030",
          nameVN: "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
          nameENG: "Doctor Strange in the Multiverse of Madness",
          nameCH: "疯狂多元宇宙中的奇异博士",
          trailer: "https://www.youtube.com/embed/aWzlQ2N6qqg",
          image: "",
          duration: "230",
          descVN:
            "Doctor Strange trong Đa vũ trụ của Madness là một bộ phim siêu anh hùng của Mỹ năm 2022 dựa trên Marvel Comics với nhân vật Doctor Strange. Được sản xuất bởi Marvel Studios và phân phối bởi Walt Disney Studios Motion Pictures, đây là phần tiếp theo của Doctor Strange (2016) và là bộ phim thứ 28 trong Marvel Cinematic Universe (MCU). Phim do Sam Raimi đạo diễn, Michael Waldron viết kịch bản và có sự tham gia của Benedict Cumberbatch trong vai Stephen Strange, cùng với Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg và Rachel McAdams. Trong phim, Strange bảo vệ America Chavez (Gomez), một thiếu niên có khả năng du hành đa vũ trụ, khỏi Wanda Maximoff (Olsen)",
          descENG:
            "Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Strange protects America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen)",
          descCH:
            "疯狂多元宇宙中的奇异博士是一部 2022 年的美国超级英雄电影，改编自漫威漫画，以奇异博士为主角。由漫威工作室制作，华特迪士尼工作室电影发行，是奇异博士 (2016) 的续集，也是漫威电影宇宙 (MCU) 的第 28 部电影。这部电影由山姆·雷米执导，迈克尔·沃尔德伦编剧，本尼迪克特·康伯巴奇饰演斯蒂芬·斯特兰奇，与伊丽莎白·奥尔森、切瓦特尔·埃加福特、本尼迪克特·黄、霍奇特尔·戈麦斯、迈克尔·斯图尔巴格和瑞秋·麦克亚当斯并肩作战。在电影中，斯特兰奇从万达马克西莫夫（奥尔森）手中保护了一个能够在多元宇宙中旅行的少年美国查韦斯（戈麦斯）",
          releaseDay: "2022-05-04T00:00:00",
          actors: "Benedict Cumberbatch, Elizabeth Olsen, Benedict Wong",
          director: "Sam Raimi",
          status: movieStatus.comming,
          type: movieType.sciFi,
          country: movieCountry.america,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0031",
          nameVN: "CHUYỂN TÀU SINH TỬ",
          nameENG: "Train to Busan",
          nameCH: "火车到釜山",
          trailer: "https://www.youtube.com/embed/1ovgxN2VWNc",
          image: "",
          duration: "230",
          descVN:
            "Train to Busan (tiếng Hàn: 부산행; Hanja: 釜山 行; RR: Busanhaeng; lit. To Busan) là một bộ phim hành động kinh dị Hàn Quốc năm 2016 của đạo diễn Yeon Sang-ho và với sự tham gia của Gong Yoo, Jung Yu-mi, Ma Dong-seok, Kim Su-an, Choi Woo-shik, Ahn So-hee và Kim Eui-sung. Nội dung phim chủ yếu diễn ra trên chuyến tàu cao tốc từ Seoul đến Busan khi ngày tận thế thây ma bất ngờ bùng phát trên đất nước này và đe dọa sự an toàn của các hành khách.",
          descENG:
            "Train to Busan (Korean: 부산행; Hanja: 釜山行; RR: Busanhaeng; lit. To Busan) is a 2016 South Korean action horror film directed by Yeon Sang-ho and starring Gong Yoo, Jung Yu-mi, Ma Dong-seok, Kim Su-an, Choi Woo-shik, Ahn So-hee and Kim Eui-sung. The film mostly takes place on a high-speed train from Seoul to Busan as a zombie apocalypse suddenly breaks out in the country and threatens the safety of the passengers.",
          descCH:
            "釜山行（韩语：부산행；汉字：釜山行；RR：釜山行；点燃。釜山）是一部 2016 年的韩国动作恐怖片 ，由延尚浩执导，孔侑、郑裕美、马Dong-seok、Kim Su-an、Choi Woo-shik、Ahn So-hee 和 Kim Eui-sung。[5]这部电影主要发生在从首尔到釜山的高速列车上，一场僵尸大灾难突然在该国爆发并威胁到乘客的安全。",
          releaseDay: "2016-05-13T00:00:00",
          actors: "Gong Yoo, Kim Su-an, Ma Dong-seok, Jung Yu-mi",
          director: "Yeon Sang-ho",
          status: movieStatus.showing,
          type: movieType.horror,
          country: movieCountry.korean,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0032",
          nameVN: 'CHUYỆN "MA" ĐÔ THỊ',
          nameENG: "URBAN MYTHS",
          nameCH: "都市神话",
          trailer: "https://www.youtube.com/embed/rLXl5qE-i9o",
          image: "",
          duration: "230",
          descVN:
            "Thần thoại đô thị (tiếng Hàn: 서울 괴담; RR: Seoulgoedam) là một bộ phim kinh dị tuyển tập năm 2022 của Hàn Quốc, bao gồm mười câu chuyện do đạo diễn đầu tay Hong Won-ki chỉ đạo và với sự tham gia của Kim Do-yoon, Lee Yul-eum, Lee Young-jin và Lee Su-min. Bộ phim omnibus trình bày những câu chuyện mà cảm giác kinh hoàng ở những nơi quen thuộc trong cuộc sống hàng ngày như tiếng ồn giữa các tầng, đồ nội thất cũ, ma-nơ-canh, đường hầm và mạng xã hội. Nó được phát hành rạp vào ngày 27 tháng 4 năm 2022",
          descENG:
            "Urban Myths (Korean: 서울괴담; RR: Seoulgoedam) is a 2022 South Korean anthology horror film, consisting of ten stories directed by debutant director Hong Won-ki and starring Kim Do-yoon, Lee Yul-eum, Lee Young-jin and Lee Su-min. The omnibus film presents stories where horror is felt in familiar everyday life places like noise between floors, old furniture, mannequins, tunnel and social media. It was released theatrically on April 27, 2022",
          descCH:
            "都市神话（韩语：서울괴담；RR：Seoulgoedam）是一部 2022 年的韩国选集恐怖电影，由新人导演洪元基执导，由金道允、李律音、李英镇和李素敏。这部综合影片讲述了在熟悉的日常生活场所（如地板之间的噪音、旧家具、人体模型、隧道和社交媒体）中感受到恐怖的故事。 2022年4月27日上映",
          releaseDay: "2022-05-13T00:00:00",
          actors: "Kim Do-yoon, Lee Yul-eum, Lee Young-jin, Lee Su-min",
          director: "Hong Won-ki",
          status: movieStatus.comming,
          type: movieType.horror,
          country: movieCountry.korean,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0033",
          nameVN: "THẢM HỌA HẠT NHÂN",
          nameENG: "Pandora",
          nameCH: "潘多拉",
          trailer: "https://www.youtube.com/embed/pbjy_MWFAFE",
          image: "",
          duration: "230",
          descVN:
            "Pandora (tiếng Hàn: 판도라; RR: Pandora) là một bộ phim thảm họa của Hàn Quốc năm 2016 do Park Jung-woo viết kịch bản và đạo diễn, với sự tham gia của Kim Nam-Gil. Phim được phát hành tại Hàn Quốc vào ngày 7 tháng 12 năm 2016",
          descENG:
            "Pandora (Korean: 판도라; RR: Pandora) is a 2016 South Korean disaster film written and directed by Park Jung-woo, starring Kim Nam-Gil. The film was released in South Korea on December 7, 2016",
          descCH:
            "潘多拉（韩语：판도라；RR：潘多拉）是一部 2016 年的韩国灾难片，由朴正宇编剧和导演，金南佶主演。影片于2016年12月7日在韩国上映",
          releaseDay: "2022-12-07T00:00:00",
          actors: "Kim Nam-gil, Kim Young-ae, Kim Ju-hyeon, Moon Jeong-hee",
          director: "Park Jung-woo",
          status: movieStatus.showing,
          type: movieType.action,
          country: movieCountry.korean,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
