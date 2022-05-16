"use strict";

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
          releaseDay: "2022-05-12T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0002",
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
          releaseDay: "2022-06-02T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0003",
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
          releaseDay: "2022-06-02T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0004",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0005",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0006",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0007",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0008",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0009",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0010",
          nameVN: "NHỮNG BÍ MẬT CỦA DUMBLEDORE",
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
          releaseDay: "2022-05-19T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0011",
          nameVN: "KẺ THỨ BA",
          nameENG: "The Third Man",
          nameCH: "第三男人",
          trailer: "https://www.youtube.com/embed/I0AVVZx0O3o",
          image: "",
          duration: "230",
          descVN:
            "Kẻ Thứ 3 là bộ phim kể về hành trình tìm cách cứu vợ của Quang Kha khi anh nhận ra anh đang có cơ hội rất lớn trong việc thay đổi quá khứ, giúp người vợ của mình có thể sống lại. Nhưng trong hành trình cứu vợ đó, anh đã khám phá ra những góc khuất của người vợ mà anh rất mực yêu thương, vậy liệu anh có còn muốn cứu vợ mình?",
          descENG:
            "The Third Man is a movie about Quang Kha's journey to find a way to save his wife when he realizes that he has a great opportunity to change the past, so that his wife can come back to life. But in the journey to save his wife, he discovered the hidden corners of the wife he loved so much, so would he still want to save his wife?",
          descCH:
            "《第三男人》是一部讲述广卡在意识到自己有很大机会改变过去，让妻子重获新生时，寻找拯救妻子的方法的电影。但在那次救妻的旅途中，他发现了自己深爱的妻子的隐秘角落，他还想救自己的妻子吗？",
          releaseDay: "2022-05-13T00:00:00",
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
            "Một cô bé cố gắng tìm hiểu làm thế nào mà cô có được sức mạnh để đốt cháy mọi thứ bằng tâm trí của mình một cách bí ẩn.",
          descENG:
            "A little girl mysteriously tries to find out how she got the power to burn things with her mind.",
          descCH: "一个小女孩神秘地试图找出她是如何获得用头脑烧东西的力量的。",
          releaseDay: "2022-05-11T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0013",
          nameVN: "NGHỀ SIÊU DỄ",
          nameENG: "Extremely Easy Job",
          nameCH: "极其简单的工作",
          trailer: "https://www.youtube.com/embed/1anBxcsV5b8",
          image: "",
          duration: "230",
          descVN:
            "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề",
          descENG:
            "Mr. Thai is a retired policeman, but he refuses to obey his duties. He still goes to find petty criminals in the neighborhood every day to help him remember his job.",
          descCH:
            "泰先生是一名退休警察，但他拒绝接受自己的职责，仍然每天在附近寻找小罪犯，以帮助他记住自己的工作。",
          releaseDay: "2022-05-13T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0014",
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
          releaseDay: "2022-05-12T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0015",
          nameVN: "TĂNG TỐC.. VỀ PHÍA EM",
          nameENG: "Fast & Feel Love ",
          nameCH: "快速感受爱",
          trailer: "https://www.youtube.com/embed/h261_whvLPM",
          image: "",
          duration: "230",
          descVN:
            "Kao (Nat Kitcharit) là một nhà vô địch thế giới môn xếp ly tốc độ (Speed Stack). Tuy thành công và nổi tiếng nhưng Kao lại chỉ như một đứa trẻ to xác suốt ngày chỉ ăn, ngủ và tập luyện. Mọi vấn đề xung quanh anh đều một tay Jay (Yaya) bạn gái anh quán xuyến. Đến một ngày khi Jay quyết định chia tay thì Kao như bị mất tất cả.",
          descENG:
            "Kao (Nat Kitcharit) is a Speed ​​Stack world champion. Despite being successful and famous, Kao is just like a big kid who eats, sleeps and exercises all day. All problems around him are handled by Jay (Yaya) his girlfriend. Until one day when Jay decided to break up, Kao seemed to have lost everything.",
          descCH:
            "Kao (Nat Kitcharit) 是 Speed Stack 世界冠军。花王虽然功成名就，却像个大孩子，一整天都在吃、睡、做运动。身边的所有问题都由女友杰（Yaya）处理。直到有一天，周杰伦决定分手，花王似乎失去了一切。",
          releaseDay: "2022-05-14T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0016",
          nameVN: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM",
          nameENG: "Haunted Tales",
          nameCH: "闹鬼的故事",
          trailer: "https://www.youtube.com/embed/Jt8KkskJmlE",
          image: "",
          duration: "230",
          descVN:
            "Bộ phim kể về 3 câu chuyện bí ẩn với những sự thật kinh hoàng dần được hé lộ.",
          descENG:
            "The film tells about 3 mysterious stories with horrifying truths that are gradually revealed.",
          descCH: "影片讲述了三个神秘的故事，可怕的真相逐渐浮出水面",
          releaseDay: "2022-05-19T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0017",
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
          releaseDay: "2022-05-26T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0018",
          nameVN: "NHỮNG BÍ MẬT CỦA DUMBLEDORE",
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
          releaseDay: "2022-05-19T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0019",
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
          releaseDay: "2022-05-27T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0020",
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
          releaseDay: "2022-05-24T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0021",
          nameVN: "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021",
          nameENG: "DORAEMON: NOBITA AND THE MINIMAL COSTORY WAR 2021",
          nameCH: "哆啦A梦：大雄与迷你世界大战 2021",
          trailer: "https://www.youtube.com/embed/XsWx71aokYE",
          image: "",
          duration: "230",
          descVN:
            "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.",
          descENG:
            "Nobita stumbles upon the tiny alien Papi, who is the President of the planet Pirika, fleeing to Earth to escape the rebels at home. Doraemon, Nobita and their best friends use miniature flashlights that transform to Papi's size to play with the boy. However, a space warship attacks the group. Feeling responsible for implicating everyone, Papi decides to take on the brutal rebels alone. Doraemon and his friends set out to the planet Pirika, side by side with his friend.",
          descCH:
            "大雄偶然发现了微小的外星人 Papi，他是 Pirika 星球的总统，为了躲避国内的叛军而逃到地球。哆啦A梦、大雄和他们最好的朋友使用可以变成爸爸大小的微型手电筒和男孩玩耍。然而，一艘太空战舰袭击了这群人。感觉有责任牵连所有人，Papi 决定独自对付残暴的叛军。哆啦A梦和他的朋友们与他的朋友并肩前往Pirika星球。",
          releaseDay: "2022-06-02T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0022",
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
          releaseDay: "2022-05-30T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0023",
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
          releaseDay: "2022-05-24T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0024",
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
          releaseDay: "2022-05-31T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0025",
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
          releaseDay: "2022-06-01T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0026",
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
          releaseDay: "2022-05-17T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0027",
          nameVN: "Doctor Strange in the Multiverse of Madness",
          nameENG: "Doctor Strange in the Multiverse of Madness",
          nameCH: "疯狂多元宇宙中的奇异博士",
          trailer: "https://www.youtube.com/embed/aWzlQ2N6qqg",
          image: "",
          duration: "230",
          descVN:
            "Bác sĩ Stephen Strange sử dụng một câu thần chú bị cấm để mở ra cánh cổng vào đa vũ trụ. Tuy nhiên, một mối đe dọa xuất hiện có thể quá lớn đối với nhóm của anh ấy để xử lý.",
          descENG:
            "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
          descCH:
            "史蒂芬·斯特兰奇博士施放了一个禁忌咒语，打开了通往多元宇宙的门户。然而，一个威胁出现了，他的团队可能无法应对。",
          releaseDay: "2022-05-18T00:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "M_0028",
          nameVN: "MỒI CÁ MẬP",
          nameENG: " Sharkbail",
          nameCH: "鲨鱼诱饵",
          trailer:
            "https://www.youtube.com/embed/iDZPSiZEDao&ab_channel=AnhNg%E1%BB%AFKeyMeans",
          image: "",
          duration: "230",
          descVN:
            "Một số người bạn đang tận hưởng kỳ nghỉ cuối tuần đã đánh cắp một vài chiếc ván trượt phản lực, đua chúng ra biển và kết thúc bằng một vụ va chạm trực diện kinh hoàng. Họ vật lộn để tìm đường về nhà với một người bạn bị thương nặng trong khi những kẻ săn mồi ẩn nấp dưới mặt nước.",
          descENG:
            "Some friends who are enjoying a weekend steal a couple of jet skis, race them out to sea and end up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while predators lurk below the water.",
          descCH:
            "一些正在享受周末的朋友偷了几艘摩托艇，将它们赶出海面，最终遭遇了可怕的正面碰撞。当掠食者潜伏在水下时，他们努力寻找与受重伤的朋友回家的路。",
          releaseDay: "2022-05-26T00:00:00",
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
