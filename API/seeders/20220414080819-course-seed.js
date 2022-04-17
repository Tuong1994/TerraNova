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
      "Courses",
      [
        {
          id: "COU_000000001",
          nameVN: "Phân tích UI/UX",
          nameENG: "UI/UX Analyze",
          descENG:
            "UI UX is shorthand for User Interface (user interface) and User Experience (user experience). This is 2 factor is very important in web design 1. Developer must treat each product as his own child and give it the best. A little from the time she was pregnant made her healthy. It was born and still had to be edited so that it looked clean and handled with other people. Just like the warranty code word must be clean, making the product must have good UI, good UX, few bugs, few crashes.",
          descVN:
            "UI UX là cách gọi tắt của User Interface (giao diện người dùng) và User Experience (trải nghiệm người dùng). Đây là 2 yếu tố rất quan trọng trong việc thiết kế 1 website. Developer phải coi mỗi sản phẩm như đứa con của mình và dành cho nó những điều tốt đẹp nhất. Chăm chút từ lúc mang thai cho nó khỏe mạnh. Nó ra đời vẫn phải chăm sóc để nó nhìn sạch sẽ, cư xử với người khác lễ phép. Cũng giống như từ khâu code đã phải clean, làm ra sản phẩm phải có UI tốt, UX tốt, ít bug, ít crash.",
          image: "",
          price: 5000000,
          categoryId: "design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000002",
          nameVN: "Tạo giao diện website với HTML/CSS",
          nameENG: "Create UI website with HTML/CSS",
          descENG:
            "HTML, HyperText Markup Language, provides content structure and meaning by defining it, for example a title, paragraph, or image. CSS, or Cascading Style Sheets, is a presentation language used to style the appearance of content using, for example, fonts or colors. The two languages ​​HTML and CSS are independent of each other and remain the same. CSS should not be written inside an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content.",
          descVN:
            "HTML, HyperText Markup Language, cung cấp cấu trúc nội dung và ý nghĩa bằng cách xác định nội dung đó, ví dụ như tiêu đề, đoạn văn hoặc hình ảnh. CSS, hay Cascading Style Sheets, là ngôn ngữ trình bày được dùng để tạo kiểu cho sự xuất hiện của nội dung sử dụng, ví dụ như phông chữ hoặc màu sắc. Hai ngôn ngữ HTML và CSS độc lập với nhau và vẫn giữ nguyên như vậy. CSS không nên được viết bên trong một tài liệu HTML và ngược lại. Theo quy định, HTML sẽ luôn đại diện cho nội dung và CSS sẽ luôn thể hiện sự xuất hiện của nội dung đó.",
          image: "",
          price: 12500000,
          categoryId: "design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000003",
          nameVN: "Thiết kế web với Photoshop",
          nameENG: "Design website with photoshop",
          descENG:
            "Adobe Photoshop (commonly known as Photoshop) is a graphic editing software developed and published by Adobe Systems in 1988 on the Macintosh system. Photoshop is considered the market leader in bitmap image editing and is considered the standard for industries related to image editing. Since Photoshop version 7.0 was released in 2002, Photoshop has revolutionized bitmap images. The latest version is now Adobe Photoshop CC. In addition to its main ability to edit photos for publications, Photoshop is also used in activities such as designing websites, painting all kinds of pictures (matte painting and many other genres), drawing textures for 3D programs. .. nearly every bitmap related operation.",
          descVN:
            "Adobe Photoshop (thường được gọi là Photoshop) là một phần mềm chỉnh sửa đồ họa được phát triển và phát hành bởi hãng Adobe Systems ra đời vào năm 1988 trên hệ máy Macintosh. Photoshop được đánh giá là phần mềm dẫn đầu thị trường về sửa ảnh bitmap và được coi là chuẩn cho các ngành liên quan tới chỉnh sửa ảnh. Từ phiên bản Photoshop 7.0 ra đời năm 2002, Photoshop đã làm lên một cuộc cách mạng về ảnh bitmap. Phiên bản mới nhất hiện nay là Adobe Photoshop CC. Ngoài khả năng chính là chỉnh sửa ảnh cho các ấn phẩm, Photoshop còn được sử dụng trong các hoạt động như thiết kế trang web, vẽ các loại tranh (matte painting và nhiều thể loại khác), vẽ texture cho các chương trình 3D... gần như là mọi hoạt động liên quan đến ảnh bitmap.",
          image: "",
          price: 8500000,
          categoryId: "design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Front End
        {
          id: "COU_000000004",
          nameVN: "Phân tích UI/UX",
          nameENG: "UI/UX Analyze",
          descENG:
            "UI UX is shorthand for User Interface (user interface) and User Experience (user experience). This is 2 factor is very important in web design 1. Developer must treat each product as his own child and give it the best. A little from the time she was pregnant made her healthy. It was born and still had to be edited so that it looked clean and handled with other people. Just like the warranty code word must be clean, making the product must have good UI, good UX, few bugs, few crashes.",
          descVN:
            "UI UX là cách gọi tắt của User Interface (giao diện người dùng) và User Experience (trải nghiệm người dùng). Đây là 2 yếu tố rất quan trọng trong việc thiết kế 1 website. Developer phải coi mỗi sản phẩm như đứa con của mình và dành cho nó những điều tốt đẹp nhất. Chăm chút từ lúc mang thai cho nó khỏe mạnh. Nó ra đời vẫn phải chăm sóc để nó nhìn sạch sẽ, cư xử với người khác lễ phép. Cũng giống như từ khâu code đã phải clean, làm ra sản phẩm phải có UI tốt, UX tốt, ít bug, ít crash.",
          image: "",
          price: 5000000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000005",
          nameVN: "Tạo giao diện website với HTML/CSS",
          nameENG: "Create UI website with HTML/CSS",
          descENG:
            "HTML, HyperText Markup Language, provides content structure and meaning by defining it, for example a title, paragraph, or image. CSS, or Cascading Style Sheets, is a presentation language used to style the appearance of content using, for example, fonts or colors. The two languages ​​HTML and CSS are independent of each other and remain the same. CSS should not be written inside an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content",
          descVN:
            "HTML, HyperText Markup Language, cung cấp cấu trúc nội dung và ý nghĩa bằng cách xác định nội dung đó, ví dụ như tiêu đề, đoạn văn hoặc hình ảnh. CSS, hay Cascading Style Sheets, là ngôn ngữ trình bày được dùng để tạo kiểu cho sự xuất hiện của nội dung sử dụng, ví dụ như phông chữ hoặc màu sắc. Hai ngôn ngữ HTML và CSS độc lập với nhau và vẫn giữ nguyên như vậy. CSS không nên được viết bên trong một tài liệu HTML và ngược lại. Theo quy định, HTML sẽ luôn đại diện cho nội dung và CSS sẽ luôn thể hiện sự xuất hiện của nội dung đó.",
          image: "",
          price: 12500000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000006",
          nameVN: "Lập trình Javasript",
          nameENG: "Javascript Programming ",
          descENG:
            "JavaScript, in its current version, is an interpreted programming language developed from the concept of prototypes. This language is widely used for websites (user side) as well as server side (with Nodejs). It was originally developed by Brendan Eich at Netscape Communications as Mocha, then renamed LiveScript, and finally JavaScript. Like Java, JavaScript has a similar syntax to C, but it is closer to Self than Java. .js is a commonly used extension for JavaScript source files. The latest version of JavaScript is ECMAScript 7. ECMAScript is a standardized version of JavaScript. Mozilla browser version 1.8 beta 1 has incomplete support for E4X - a JavaScript extension that supports working with XML, standardized in ECMA-357.",
          descVN:
            "JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web (phía người dùng) cũng như phía máy chủ (với Nodejs). Nó vốn được phát triển bởi Brendan Eich tại Hãng truyền thông Netscape với cái tên đầu tiên Mocha, rồi sau đó đổi tên thành LiveScript, và cuối cùng thành JavaScript. Giống Java, JavaScript có cú pháp tương tự C, nhưng nó gần với Self hơn Java. .js là phần mở rộng thường được dùng cho tập tin mã nguồn JavaScript. Phiên bản mới nhất của JavaScript là ECMAScript 7. ECMAScript là phiên bản chuẩn hóa của JavaScript. Trình duyệt Mozilla phiên bản 1.8 beta 1 có hỗ trợ không đầy đủ cho E4X - phần mở rộng cho JavaScript hỗ trợ làm việc với XML, được chuẩn hóa trong ECMA-357.",
          image: "",
          price: 15500000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000007",
          nameVN: "Lập trình web với ReactJs",
          nameENG: "ReactJs",
          descENG:
            "React is the most popular JavaScript library for building user interfaces (UIs). It gives excellent response speed to user input using a new method of rendering web pages.Components of this tool are developed by Facebook. It was launched as an open source JavaScript engine in 2013. It is now ahead of major competitors like Angular and Bootstrap, the two best-selling JavaScript libraries of the time.",
          descVN:
            "React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu bằng cách sử dụng phương pháp mới để render trang web.Components của công cụ này được phát triển bởi Facebook. Nó được ra mắt như một công cụ JavaScript mã nguồn mở vào năm 2013. Hiện tại, nó đã đi trước các đối thủ chính như Angular và Bootstrap, hai thư viện JavaScript bán chạy nhất thời bấy giờ",
          image: "",
          price: 18500000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000008",
          nameVN: "Lập trình web với Angular",
          nameENG: "Angular",
          descENG:
            "Angular is considered an open source (open source) or free framework dedicated to web design work. Angular has been in development since 2009 and is maintained by Google. These frameworks are considered as the most powerful front end frameworks dedicated by advanced HTML cutting programmers. Angular is widely used for the purpose of building a Single Page Application (SPA) project. Currently, the stable version of Angular is Angular 9 (released on February 7, 2020) with TypeScript 3.6 and 3.7.",
          descVN:
            "Angular được xem là một open source (mã nguồn mở) hay frameworks miễn phí chuyên dụng cho công việc thiết kế web. Angular được phát triển từ những năm 2009 và được duy trì bởi Google. Frameworks này được xem là frameworks front end mạnh mẽ nhất chuyên dụng bởi các lập trình viên cắt HTML cao cấp. Angular được ứng dụng rộng rãi với mục đích xây dựng project Single Page Application (SPA). Hiện tại, Version stable của Angular là Angular 9 (released on February 7, 2020) với TypeScript 3.6 và 3.7.",
          image: "",
          price: 17500000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000009",
          nameVN: "Lập trình web với VueJs",
          nameENG: "VueJs",
          descENG:
            "Vuejs is called Vue for short (pronounced /vjuː/, it's like the English word view). Vue.js is a very flexible framework widely used to build user interfaces. Completely different from monolithic frameworks, Vue usually owns the design from the ground up in ways that allow as well as encourage work to make developing applications easier step-by-step. Once you have developed the view layer, you only need to use Vue's core library type. In addition, if you combine with modern techniques, Vue can also easily meet all the needs of building a site application with a higher complexity.",
          descVN:
            "Vuejs được gọi tắt là Vue (được phát âm là /vjuː/, nó giống như từ view trong tiếng Anh). Vue.js là một framework rất linh động được dùng phổ biến để xây dựng nên các giao diện người dùng. Hoàn toàn khác với các framework nguyên khối thì Vue thường sở hữu thiết kế từ đầu theo những hướng cho phép cũng như khuyến khích làm việc để phát triển dễ dàng hơn các ứng dụng theo từng bước một. Một  khi đã phát triển lớp giao diện (view layer) thì người dùng chỉ cần sử dụng loại thư viện lõi của Vue. Ngoài ra, nếu như bạn kết hợp với các kỹ thuật thiên hướng hiện đại thì Vue cũng có thể đáp ứng được dễ dàng mọi nhu cầu xây dựng ứng dụng của một trang với độ phức tạp cao hơn.",
          image: "",
          price: 16500000,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // BackEnd
        {
          id: "COU_000000010",
          nameVN: "PHP",
          nameENG: "PHP",
          descENG:
            "PHP: Hypertext Preprocessor, often abbreviated to PHP, is a scripting language or type of code primarily used to develop general purpose, open source, server-written applications. It is very suitable for the web and can be easily embedded into HTML pages. Because it is optimized for web applications, is fast, compact, has a syntax similar to C and Java, is easy to learn, and has a relatively shorter product build time compared to other languages, PHP has quickly become one of the most popular languages ​​in the world. The world's most popular web programming language.",
          descVN:
            "PHP: Hypertext Preprocessor, thường được viết tắt thành PHP là một ngôn ngữ lập trình kịch bản hay một loại mã lệnh chủ yếu được dùng để phát triển các ứng dụng viết cho máy chủ, mã nguồn mở, dùng cho mục đích tổng quát. Nó rất thích hợp với web và có thể dễ dàng nhúng vào trang HTML. Do được tối ưu hóa cho các ứng dụng web, tốc độ nhanh, nhỏ gọn, cú pháp giống C và Java, dễ học và thời gian xây dựng sản phẩm tương đối ngắn hơn so với các ngôn ngữ khác nên PHP đã nhanh chóng trở thành một ngôn ngữ lập trình web phổ biến nhất thế giới.",
          image: "",
          price: 20500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000011",
          nameVN: "Cơ sở dữ liệu - MySQL",
          nameENG: "MySQL - Database",
          descENG:
            "MySQL is the world's most popular free and open source database management system and is very popular with developers in application development. Because MySQL is a high-speed, stable and easy-to-use database management system that is portable, works on many operating systems, provides a large system of very powerful utility functions. With high speed and security, MySQL is well suited for applications that access databases on the internet. Users can download MySQL for free from the homepage. MySQL has many versions for different operating systems: Win32 version for operating systems Windows, Linux, Mac OS X, Unix, FreeBSD, NetBSD, Novell NetWare, SGI Irix, Solaris, SunOS,..",
          descVN:
            "MySQL là hệ quản trị cơ sở dữ liệu tự do nguồn mở phổ biến nhất thế giới và được các nhà phát triển rất ưa chuộng trong quá trình phát triển ứng dụng. Vì MySQL là hệ quản trị cơ sở dữ liệu tốc độ cao, ổn định và dễ sử dụng, có tính khả chuyển, hoạt động trên nhiều hệ điều hành cung cấp một hệ thống lớn các hàm tiện ích rất mạnh. Với tốc độ và tính bảo mật cao, MySQL rất thích hợp cho các ứng dụng có truy cập CSDL trên internet. Người dùng có thể tải về MySQL miễn phí từ trang chủ. MySQL có nhiều phiên bản cho các hệ điều hành khác nhau: phiên bản Win32 cho các hệ điều hành dòng Windows, Linux, Mac OS X, Unix, FreeBSD, NetBSD, Novell NetWare, SGI Irix, Solaris, SunOS,..",
          image: "",
          price: 21500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000012",
          nameVN: "NodeJs",
          nameENG: "NodeJs",
          descENG:
            "Node.js is a software system designed for writing scalable internet applications, especially web servers. The program is written in JavaScript, using event-driven, asynchronous input/output to minimize overhead and maximize scalability. Node.js includes Google's V8 JavaScript engine, libUV, and several other libraries.",
          descVN:
            "Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. Node.js bao gồm có V8 JavaScript engine của Google, libUV, và vài thư viện khác.",
          image: "",
          price: 10500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000013",
          nameVN: "Quản trị hệ cơ sở dữ liệu",
          nameENG: "Database Administration",
          descENG:
            "A database management system (DBMS) is a software package designed to define, manipulate, retrieve, and manage data in a database. The DBMS usually manipulates its own data. Data format, field names, record structure and file structure.",
          descVN:
            "Hệ quản trị cơ sở dữ liệu (DBMS) là một gói phần mềm được thiết kế để xác định, thao tác, truy xuất và quản lý dữ liệu trong cơ sở dữ liệu. DBMS thường thao tác với dữ liệu của chính nó. Định dạng dữ liệu, tên field, cấu trúc bản record và cấu trúc file.",
          image: "",
          price: 20500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000014",
          nameVN: "Lập trình dữ liệu SQL",
          nameENG: "SQL Data Programming",
          descENG:
            "What is SQL? SQL stands for Structured Query Language, which means data query language. SQL can be considered as a common language that any relational database system (RDBMS) must meet, typically: Oracle Database, SQL Server, MySQL. Any large company needs to build a system to store the database. Everything in this database will be reduced to many tables, which have relationships with each other. SQL helps to manage information more efficiently and query information faster, making it easier to maintain information.",
          descVN:
            "SQL là gì? SQL là viết tắt của Structured Query Language, nghĩa là ngôn ngữ truy vấn dữ liệu. Có thể coi ngôn ngữ SQL là ngôn ngữ chung mà bất cứ hệ thống cơ sở dữ liệu quan hệ (RDBMS) nào cũng phải đáp ứng, điển hình như: Oracle Database, SQL Server, MySQL. Bất kì công ty nào lớn cũng cần xây dựng một hệ thống để lưu trữ cơ sở dữ liệu. Mọi thứ trong cơ sở dữ liệu này sẽ được quy ra thành nhiều bảng, có mối quan hệ với nhau. SQL giúp quản lý hiệu quả và truy vấn thông tin nhanh hơn, giúp bảo trì thông tin dễ dàng hơn.",
          image: "",
          price: 20500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000015",
          nameVN: "Swift OS",
          nameENG: "Swift OS",
          descENG:
            "Swift is an object-oriented programming language for developing iOS and macOS, watchOS, tvOS, Linux, and z/OS. introduced by Apple at WWDC 2014. Swift is expected to coexist with Objective-C, the current programming language for Apple's operating systems.",
          descVN:
            "Swift là một ngôn ngữ lập trình hướng đối tượng dành cho việc phát triển iOS và macOS, watchOS, tvOS, Linux, và z/OS. được giới thiệu bởi Apple tại hội nghị WWDC 2014. Swift được mong đợi sẽ tồn tại song song cùng Objective-C, ngôn ngữ lập trình hiện tại dành cho các hệ điều hành của Apple",
          image: "",
          price: 19500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000016",
          nameVN: "Lập trình C++",
          nameENG: "C++ Programming (C Plus Plus)",
          descENG:
            "C++ (C Plus Plus) is a kind of middle-level programming language. It is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes', The language has expanded considerably over time, and C++ Modern programming has the following features: generic programming, object-oriented programming, procedural programming, statically typed free-parametric multi-paradigm languages, abstract data, and polymorphic programming, plus more features and tools for manipulating low-level memory. Since the 1990s, C++ has become one of the favorite and popular commercial languages ​​of programmers.",
          descVN:
            "C++ (C Plus Plus) là một loại ngôn ngữ lập trình bậc trung (middle-level). Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ lập trình C, hoặc 'C với các lớp Class', Ngôn ngữ đã được mở rộng đáng kể theo thời gian và C ++ hiện đại có các tính năng: lập trình tổng quát, lập trình hướng đối tượng, lập trình thủ tục, ngôn ngữ đa mẫu hình tự do có kiểu tĩnh, dữ liệu trừu tượng, và lập trình đa hình, ngoài ra còn có thêm các tính năng, công cụ để thao tác với bộ nhớ cấp thấp. Từ thập niên 1990, C++ đã trở thành một trong những ngôn ngữ thương mại ưa thích và phổ biến của lập trình viên.",
          image: "",
          price: 21500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000017",
          nameVN: "Lập trình Ruby",
          nameENG: "Ruby Programming",
          descENG:
            "Ruby is an object-oriented, reactive programming language. According to the author, Ruby is influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. Ruby is an interpreted and object-oriented language. Ruby provides many programming paradigms, including functional, object-oriented, imperative, and reflective programming. It uses a volatile type system and automatic memory management.",
          descVN:
            "Ruby là một ngôn ngữ lập trình hướng đối tượng, có khả năng phản ứng. Theo tác giả, Ruby chịu ảnh hưởng bởi Perl, Smalltalk, Eiffel, Ada và Lisp. Ruby là ngôn ngữ thông dịch và hướng đối tượng.Ruby cung cấp nhiều mẫu hình lập trình, bao gồm lập trình hàm, hướng đối tượng, mệnh lệnh, phản xạ. Nó sử dụng hệ thống kiểu biến động và tự động quản lý bộ nhớ tự động.",
          image: "",
          price: 21500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000018",
          nameVN: "Lập trình Next-JS",
          nameENG: "Next-JS Programming",
          descENG:
            "Back in the mid-2000s, when the web was young and growing, developers were just starting to move from static HTML pages to dynamic web pages. It was the heyday of object-oriented programming languages ​​like PHP (Server renders HTML). Then came the JavaScript era. People are starting to realize that this language is supported for the web and can be used a lot. You can submit dynamic forms, make HTTP requests, create beautiful scrolling effects, and even create web pages in no time. The rise of JavaScript and libraries like jQuery allowed web developers to create beautiful interfaces that are fully customizable using JavaScript. Before long, every web developer started pushing more and more JavaScript down to the web client. Sure, technology evolved, mobile phones and PCs got better with more RAM and cores, but JavaScript started evolving faster. More functionality, more features, and more frameworks mean a better user experience and the ability to feel like a web app. But this also means pushing more and more JavaScript to mobile devices, and those devices can't keep up with the evolving JavaScript limits.",
          descVN:
            "Trở lại giữa những năm 2000, khi web còn non trẻ và đang phát triển, các nhà phát triển mới bắt đầu chuyển từ các trang HTML tĩnh sang các trang web động. Đó là thời hoàng kim của ngôn ngữ lập trình hướng đối tượng như PHP (Server render HTML). Sau đó là thời đại JavaScript. Mọi người bắt đầu nhận ra rằng ngôn ngữ này được hỗ trợ cho web và có thể được sử dụng rất nhiều. Bạn có thể submit form động, requests HTTP, tạo ra các hiệu ứng cuộn đẹp mắt và thậm chí tạo trang web nhanh chóng. Sự gia tăng của JavaScript và các thư viện như jQuery cho phép các nhà phát triển web tạo ra các giao diện đẹp có thể tùy chỉnh hoàn toàn bằng JavaScript. Chẳng bao lâu, mọi nhà phát triển web bắt đầu đẩy ngày càng nhiều JavaScript xuống cho client web. Chắc chắn, công nghệ phát triển, điện thoại di động và PC trở nên tốt hơn với nhiều RAM và lõi hơn, nhưng JavaScript bắt đầu phát triển nhanh hơn.  Nhiều chức năng hơn, nhiều tính năng hơn và nhiều frameworks hơn có nghĩa là trải nghiệm người dùng tốt hơn và khả năng tạo cảm giác giống như ứng dụng trên web. Nhưng điều này cũng có nghĩa là ngày càng đẩy nhiều JavaScript xuống thiết bị di động, và các thiết bị đó không thể theo kịp các giới hạn JavaScript đang phát triển.",
          image: "",
          price: 18500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000019",
          nameVN: "Lập trình Java",
          nameENG: "Java Programming",
          descENG:
            "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language that allows developers to write once, run anywhere (WORA), which means that compiled Java code can run on all Java-enabled platforms without no need to recompile.[10] Java applications are typically compiled to bytecode that can be run on any Java virtual machine (JVM) regardless of the underlying computer architecture. Java's syntax is similar to C and C++, but has less low-level facilities than the above languages. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are not normally available in traditionally compiled languages. As of 2019 Java is one of the most popular programming languages ​​used according to GitHub, especially for client-server web applications, with 9 million developers reported.",
          descVN:
            "Java là một ngôn ngữ lập trình hướng đối tượng, dựa trên lớp được thiết kế để có càng ít phụ thuộc thực thi càng tốt. Nó là ngôn ngữ lập trình có mục đích chung cho phép các nhà phát triển ứng dụng viết một lần, chạy ở mọi nơi (WORA), nghĩa là mã Java đã biên dịch có thể chạy trên tất cả các nền tảng hỗ trợ Java mà không cần biên dịch lại.[10] Các ứng dụng Java thường được biên dịch thành bytecode có thể chạy trên bất kỳ máy ảo Java (JVM) nào bất kể kiến trúc máy tính bên dưới. Cú pháp của Java tương tự như C và C++, nhưng có ít cơ sở cấp thấp hơn các ngôn ngữ trên. Java runtime cung cấp các khả năng động (chẳng hạn như phản ánh và sửa đổi mã thời gian chạy) thường không có sẵn trong các ngôn ngữ biên dịch truyền thống. Tính đến năm 2019 Java là một trong những ngôn ngữ lập trình phổ biến nhất được sử dụng theo GitHub, đặc biệt cho các ứng dụng web máy khách-máy chủ, với 9 triệu nhà phát triển đã được báo cáo.",
          image: "",
          price: 21500000,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Fullstack
        {
          id: "COU_000000020",
          nameVN: "Lập trình Front End",
          nameENG: "Front End Programming",
          descENG:
            "The front end of a website is the part that interacts with the user. Everything you see when you navigate the Internet, from fonts and colors to drop-down menus and sliders, is a combination of HTML, CSS, and JavaScript controlled by your browser. friend. The front-end Member sets up the interface of a page page and architectures the user experiences. To implement those titles, front-end developers must have the main features of 3 main languages: HTML, CSS and JavaScript.",
          descVN:
            "Front End của một trang web là phần tương tác với người dùng. Tất cả mọi thứ bạn nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt, là một sự kết hợp của HTML, CSS, và JavaScript được điều khiển bởi trình duyệt máy tính của bạn. Các lập trình viên front-end chịu trách nhiệm cho giao diện của một trang web và kiến trúc những trải nghiệm của người dùng. Để thực hiện được những mục tiêu đó, các lập trình viên front-end phải tinh thông 3 ngôn ngữ chính: HTML, CSS, và ngôn ngữ lập trình JavaScript.",
          image: "",
          price: 20500000,
          categoryId: "fullStack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000021",
          nameVN: "Lập trình Back End",
          nameENG: "Back End Programming",
          descENG:
            "The back end of a website consists of a server, an application, and a database. A back-end developer builds and maintains the technology that, the power of those components, enables the user interface part of a website to live on. To make the server, application, and database interoperable, back-end developers use server-side languages ​​such as PHP, Ruby, Python, Java, and .Net to build an application, and tools like MySQL, Oracle, and SQL Server to find, store, or change data and serve it back to the user in the front-end. Back-end developer jobs also often require experience with PHP frameworks such as Zend, Symfony, and CakePHP; experience with version management software such as SVN, CVS, or Git; and experience with Linux in system development and deployment.",
          descVN:
            "Back End của một trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu. Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được. Để khiến cho máy chủ, ứng dụng, và cơ sở dữ liệu có thể giao tiếp được với nhau, các lập trình viên back-end sử dụng các ngôn ngữ server-side như PHP, Ruby, Python, Java, và .Net để xây dựng một ứng dụng, và các công cụ như MySQL, Oracle, và SQL Server để tìm kiếm, lưu trữ, hoặc thay đổi dữ liệu và phục vụ trở lại tới người dùng trong phần front-end. Các công việc tuyển dụng lập trình viên back-end cũng thường yêu cầu kinh nghiệm về các framework PHP như Zend, Symfony, và CakePHP; có kinh nghiệm với các phần mềm quản lý phiên bản như SVN, CVS, hoặc Git; và kinh nghiệm với Linux trong việc phát triển và triển khai hệ thống.",
          image: "",
          price: 22500000,
          categoryId: "fullStack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Mobile
        {
          id: "COU_000000022",
          nameVN: "Lập trình Android",
          nameENG: "Android Programming",
          descENG:
            "Android is a Linux-based operating system designed for touch screen mobile devices such as smartphones and tablets. Initially, Android was developed by Android, Inc. with financial backing from Google and later acquired by Google itself in 2005. Android launched in 2007 with the announcement of the Open Handset Alliance: an association of hardware companies, software, and telecommunications with the goal of promoting open standards for mobile devices. The first Android phone went on sale in 2008.",
          descVN:
            "Android là một hệ điều hành dựa trên nền tảng Linux được thiết kế dành cho các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng. Ban đầu, Android được phát triển bởi Android, Inc. với sự hỗ trợ tài chính từ Google và sau này được chính Google mua lại vào năm 2005. Android ra mắt vào năm 2007 cùng với tuyên bố thành lập Liên minh thiết bị cầm tay mở: một hiệp hội gồm các công ty phần cứng, phần mềm, và viễn thông với mục tiêu đẩy mạnh các tiêu chuẩn mở cho các thiết bị di động. Chiếc điện thoại đầu tiên chạy Android được bán vào năm 2008.",
          image: "",
          price: 20500000,
          categoryId: "mobile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "COU_000000023",
          nameVN: "Lập trình IOS",
          nameENG: "IOS Programming",
          descENG:
            "iOS (formerly iPhone OS) is the operating system on Apple's mobile devices. It is the operating system that runs on iPhone, iPad, and iPod Touch products and is the second most popular operating system globally, after Google's Android. This operating system was originally developed only to run on the iPhone (called iPhone OS), but was later extended to run on other Apple devices such as the iPod Touch (September 2007) and iPad tablets. (January 2010). As of January 2017, the iOS App Store contains approximately 2.2 million apps, 1 million of which are iPad-only apps, and have been downloaded approximately 130 billion times in total. In Q4 2010, about 26% of smartphones ran iOS, behind in market share behind Google's Android and Nokia's Symbian.",
          descVN:
            "iOS (trước đây là iPhone OS) là hệ điều hành trên các thiết bị di động của Apple. Đây là hệ điều hành chạy trên các sản phẩm iPhone, iPad, và iPod Touch và là hệ điều hành phổ biến thứ 2 trên toàn cầu, sau Android của Google. Ban đầu hệ điều hành này chỉ được phát triển để chạy trên iPhone (gọi là iPhone OS), nhưng sau đó được mở rộng để chạy trên các thiết bị khác của Apple như iPod Touch (tháng 9 năm 2007) và máy tính bảng iPad (tháng 1 năm 2010). Tính đến tháng 1 năm 2017, App Store trên iOS chứa khoảng 2.2 triệu ứng dụng, 1 triệu trong số đó là ứng dụng chỉ dành cho iPad và được tải về tổng cộng khoảng 130 tỷ lần. Trong quý 4 năm 2010, có khoảng 26% điện thoại thông minh chạy hệ điều hành iOS, xếp sau về thị phần so với Android của Google và Symbian của Nokia.",
          image: "",
          price: 21500000,
          categoryId: "mobile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Tư duy lập trình
        {
          id: "COU_000000024",
          nameVN: "Lập trình hướng đối tượng",
          nameENG: "Object Oriented Programming",
          descENG:
            "Object-oriented programming (English: Object-oriented programming, abbreviated: OOP) is a programming pattern based on the concept of 'object technology', in which objects contain data, on objects. fields, often called attributes; and source code, organized into methods. Methods make it possible for an object to access and modify data fields of other objects with which the current object interacts (the object supports 'this' or 'self' methods). In object-oriented programming, the computer program is designed by separating it from the scope of objects that interact with each other. Object-oriented programming languages ​​are quite diverse, most of which are class-based languages, which means that objects in these languages ​​are considered instances of a class, used to define a data type. .",
          descVN:
            "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm 'công nghệ đối tượng', mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức 'this' hoặc 'self'). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau. Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
          image: "",
          price: 11500000,
          categoryId: "mindset",
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
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
