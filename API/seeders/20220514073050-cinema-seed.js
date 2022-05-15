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
      "Cinemas",
      [
        {
          id: "CINE_0001",
          name: "BHD Star Cineplex - Bitexco",
          address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        {
          id: "CINE_0002",
          name: "BHD Star Cineplex - Vincom Lê Văn Việt",
          address: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        {
          id: "CINE_0003",
          name: "BHD Star Cineplex - Vincom Quang Trung",
          address: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        {
          id: "CINE_0004",
          name: "BHD Star Cineplex - 3/2",
          address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        {
          id: "CINE_0005",
          name: "BHD Star Cineplex - Vincom Thảo Điền",
          address: "L5-Megamall, 159 XL Hà Nội, Q.2",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        {
          id: "CINE_0006",
          name: "BHD Star Cineplex - Phạm Hùng",
          address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0001",
        },
        // BHD Star

        {
          id: "CINE_0007",
          name: "CGV - Aeon Bình Tân",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
        },
        {
          id: "CINE_0008",
          name: "CGV - Aeon Tân Phú",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
        },
        {
          id: "CINE_0009",
          name: "CGV - Crescent Mall",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7",
        },
        {
          id: "CINE_0010",
          name: "CGV - CT Plaza",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "60A Trường Sơn,P. 2, Tân Bình",
        },
        {
          id: "CINE_0011",
          name: "CGV - Hoàng Văn Thụ",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân Bình",
        },
        {
          id: "CINE_0012",
          name: "CGV - Hùng Vương Plaza",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "Lầu 7, 126 Hùng Vương, Q. 5",
        },
        {
          id: "CINE_0013",
          name: "CGV - Liberty Citypoint",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pateur, Q. 1",
        },
        {
          id: "CINE_0014",
          name: "CGV - Pandora City",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú",
        },
        {
          id: "CINE_0015",
          name: "CGV - Parkson Đồng Khởi",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến Nghé, Q.1",
        },
        {
          id: "CINE_0016",
          name: "CGV - Pearl Plaza",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh",
        },
        {
          id: "CINE_0017",
          name: "CGV - Sư Vạn Hạnh",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10",
        },
        {
          id: "CINE_0018",
          name: "CGV - Vincom Đồng Khởi",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1",
        },
        {
          id: "CINE_0019",
          name: "CGV - Vincom Landmark 81",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM",
        },
        {
          id: "CINE_0020",
          name: "CGV - Golden Plaza",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5",
        },
        {
          id: "CINE_0021",
          name: "CGV - IMC Trần Quang Khải",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address: "T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1",
        },
        {
          id: "CINE_0022",
          name: "CGV - Vincom Gò Vấp",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp",
        },
        {
          id: "CINE_0023",
          name: "CGV - Paragon",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7",
        },
        {
          id: "CINE_0024",
          name: "CGV - Satra Củ Chi",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM",
        },
        {
          id: "CINE_0025",
          name: "CGV - CGV Saigonres Nguyễn Xí",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh",
        },
        {
          id: "CINE_0026",
          name: "CGV - VivoCity",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0002",
          address:
            "Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. 7",
        },
        // CGV

        {
          id: "CINE_0027",
          name: "CNS - Hai Bà Trưng",
          address: "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0003",
        },
        {
          id: "CINE_0028",
          name: "CNS - Quốc Thanh",
          address: "271 Nguyễn Trãi, Q.1",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0003",
        },
        // CNS

        {
          id: "CINE_0029",
          name: "GLX - Kinh Dương Vương",
          address: "718bis Kinh Dương Vương, Q.6",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0030",
          name: "GLX - Nguyễn Du",
          address: "116 Nguyễn Du, Q.1",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0031",
          name: "GLX - Phạm Văn Chí",
          address: "Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0032",
          name: "GLX - Quang Trung",
          address: "L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0033",
          name: "GLX - Trung Chánh",
          address: "TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0034",
          name: "GLX - Huỳnh Tấn Phát",
          address: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0035",
          name: "GLX - Nguyễn Văn Quá",
          address: "119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        {
          id: "CINE_0036",
          name: "GLX - Tân Bình",
          address: "246 Nguyễn Hồng Đào, Tân Bình",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0004",
        },
        // Galaxy

        {
          id: "CINE_0037",
          name: "Lotte - Cantavil",
          address: "L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0038",
          name: "Lotte - Diamond",
          address: "L13-Diamond Plaza, 34 Lê Duẩn, Q.1",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0039",
          name: "Lotte - Gò Vấp",
          address: "L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0040",
          name: "Lotte - Nowzone",
          address: "L5-Nowzone, 235 Nguyễn Văn Cừ, Q.1",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0041",
          name: "Lotte - Phú Thọ",
          address: "L4-Lotte Mart Phú Thọ, Q.11",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0042",
          name: "Lotte - Cộng Hòa",
          address: "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0043",
          name: "Lotte - Thủ Đức",
          address: "L2-Joy Citipoint, KCX Linh Trung, Thủ Đức",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        {
          id: "CINE_0044",
          name: "Lotte - Nam Sài Gòn",
          address: "L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0005",
        },
        // Lotte

        {
          id: "CINE_0045",
          name: "MegaGS - Cao Thắng",
          address: "19 Cao Thắng, Q.3",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cineplexId: "CPLEX_0006",
        },
        // Mega GS
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
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
