import {
  mergeEditorialParts,
  type EditorialPart,
} from "../define-editorial-part"

import articleArt1 from "./articles/article-art-1"
import articleArt10 from "./articles/article-art-10"
import articleArt100 from "./articles/article-art-100"
import articleArt101 from "./articles/article-art-101"
import articleArt102 from "./articles/article-art-102"
import articleArt103 from "./articles/article-art-103"
import articleArt104 from "./articles/article-art-104"
import articleArt105 from "./articles/article-art-105"
import articleArt106 from "./articles/article-art-106"
import articleArt107 from "./articles/article-art-107"
import articleArt108 from "./articles/article-art-108"
import articleArt109 from "./articles/article-art-109"
import articleArt11 from "./articles/article-art-11"
import articleArt110 from "./articles/article-art-110"
import articleArt111 from "./articles/article-art-111"
import articleArt112 from "./articles/article-art-112"
import articleArt113 from "./articles/article-art-113"
import articleArt114 from "./articles/article-art-114"
import articleArt115 from "./articles/article-art-115"
import articleArt116 from "./articles/article-art-116"
import articleArt116a from "./articles/article-art-116a"
import articleArt116b from "./articles/article-art-116b"
import articleArt116c from "./articles/article-art-116c"
import articleArt116d from "./articles/article-art-116d"
import articleArt116e from "./articles/article-art-116e"
import articleArt117 from "./articles/article-art-117"
import articleArt118 from "./articles/article-art-118"
import articleArt119 from "./articles/article-art-119"
import articleArt12 from "./articles/article-art-12"
import articleArt120 from "./articles/article-art-120"
import articleArt121 from "./articles/article-art-121"
import articleArt122 from "./articles/article-art-122"
import articleArt123 from "./articles/article-art-123"
import articleArt124 from "./articles/article-art-124"
import articleArt125 from "./articles/article-art-125"
import articleArt126 from "./articles/article-art-126"
import articleArt127 from "./articles/article-art-127"
import articleArt128 from "./articles/article-art-128"
import articleArt129 from "./articles/article-art-129"
import articleArt12a from "./articles/article-art-12a"
import articleArt12b from "./articles/article-art-12b"
import articleArt13 from "./articles/article-art-13"
import articleArt130 from "./articles/article-art-130"
import articleArt131 from "./articles/article-art-131"
import articleArt132 from "./articles/article-art-132"
import articleArt133 from "./articles/article-art-133"
import articleArt134 from "./articles/article-art-134"
import articleArt135 from "./articles/article-art-135"
import articleArt136 from "./articles/article-art-136"
import articleArt137 from "./articles/article-art-137"
import articleArt138 from "./articles/article-art-138"
import articleArt139 from "./articles/article-art-139"
import articleArt14 from "./articles/article-art-14"
import articleArt140 from "./articles/article-art-140"
import articleArt141 from "./articles/article-art-141"
import articleArt142 from "./articles/article-art-142"
import articleArt143 from "./articles/article-art-143"
import articleArt144 from "./articles/article-art-144"
import articleArt145 from "./articles/article-art-145"
import articleArt145a from "./articles/article-art-145a"
import articleArt146 from "./articles/article-art-146"
import articleArt147 from "./articles/article-art-147"
import articleArt148 from "./articles/article-art-148"
import articleArt149 from "./articles/article-art-149"
import articleArt14a from "./articles/article-art-14a"
import articleArt15 from "./articles/article-art-15"
import articleArt150 from "./articles/article-art-150"
import articleArt151 from "./articles/article-art-151"
import articleArt151a from "./articles/article-art-151a"
import articleArt152 from "./articles/article-art-152"
import articleArt153 from "./articles/article-art-153"
import articleArt154 from "./articles/article-art-154"
import articleArt155 from "./articles/article-art-155"
import articleArt156 from "./articles/article-art-156"
import articleArt157 from "./articles/article-art-157"
import articleArt158 from "./articles/article-art-158"
import articleArt159 from "./articles/article-art-159"
import articleArt16 from "./articles/article-art-16"
import articleArt160 from "./articles/article-art-160"
import articleArt161 from "./articles/article-art-161"
import articleArt162 from "./articles/article-art-162"
import articleArt163 from "./articles/article-art-163"
import articleArt164 from "./articles/article-art-164"
import articleArt165 from "./articles/article-art-165"
import articleArt166 from "./articles/article-art-166"
import articleArt167 from "./articles/article-art-167"
import articleArt167a from "./articles/article-art-167a"
import articleArt168 from "./articles/article-art-168"
import articleArt169 from "./articles/article-art-169"
import articleArt17 from "./articles/article-art-17"
import articleArt170 from "./articles/article-art-170"
import articleArt171 from "./articles/article-art-171"
import articleArt172 from "./articles/article-art-172"
import articleArt173 from "./articles/article-art-173"
import articleArt174 from "./articles/article-art-174"
import articleArt175 from "./articles/article-art-175"
import articleArt176 from "./articles/article-art-176"
import articleArt177 from "./articles/article-art-177"
import articleArt177a from "./articles/article-art-177a"
import articleArt178 from "./articles/article-art-178"
import articleArt178a from "./articles/article-art-178a"
import articleArt179 from "./articles/article-art-179"
import articleArt179a from "./articles/article-art-179a"
import articleArt18 from "./articles/article-art-18"
import articleArt180 from "./articles/article-art-180"
import articleArt181 from "./articles/article-art-181"
import articleArt182 from "./articles/article-art-182"
import articleArt182a from "./articles/article-art-182a"
import articleArt183 from "./articles/article-art-183"
import articleArt184 from "./articles/article-art-184"
import articleArt185 from "./articles/article-art-185"
import articleArt186 from "./articles/article-art-186"
import articleArt187 from "./articles/article-art-187"
import articleArt188 from "./articles/article-art-188"
import articleArt189 from "./articles/article-art-189"
import articleArt19 from "./articles/article-art-19"
import articleArt190 from "./articles/article-art-190"
import articleArt191 from "./articles/article-art-191"
import articleArt192 from "./articles/article-art-192"
import articleArt193 from "./articles/article-art-193"
import articleArt194 from "./articles/article-art-194"
import articleArt195 from "./articles/article-art-195"
import articleArt196 from "./articles/article-art-196"
import articleArt197 from "./articles/article-art-197"
import articleArt198 from "./articles/article-art-198"
import articleArt199 from "./articles/article-art-199"
import articleArt2 from "./articles/article-art-2"
import articleArt20 from "./articles/article-art-20"
import articleArt200 from "./articles/article-art-200"
import articleArt201 from "./articles/article-art-201"
import articleArt202 from "./articles/article-art-202"
import articleArt203 from "./articles/article-art-203"
import articleArt204 from "./articles/article-art-204"
import articleArt205 from "./articles/article-art-205"
import articleArt206 from "./articles/article-art-206"
import articleArt207 from "./articles/article-art-207"
import articleArt208 from "./articles/article-art-208"
import articleArt209 from "./articles/article-art-209"
import articleArt21 from "./articles/article-art-21"
import articleArt210 from "./articles/article-art-210"
import articleArt211 from "./articles/article-art-211"
import articleArt212 from "./articles/article-art-212"
import articleArt213 from "./articles/article-art-213"
import articleArt214 from "./articles/article-art-214"
import articleArt215 from "./articles/article-art-215"
import articleArt216 from "./articles/article-art-216"
import articleArt217 from "./articles/article-art-217"
import articleArt218 from "./articles/article-art-218"
import articleArt219 from "./articles/article-art-219"
import articleArt22 from "./articles/article-art-22"
import articleArt220 from "./articles/article-art-220"
import articleArt221 from "./articles/article-art-221"
import articleArt222 from "./articles/article-art-222"
import articleArt223 from "./articles/article-art-223"
import articleArt224 from "./articles/article-art-224"
import articleArt225 from "./articles/article-art-225"
import articleArt226 from "./articles/article-art-226"
import articleArt227 from "./articles/article-art-227"
import articleArt228 from "./articles/article-art-228"
import articleArt229 from "./articles/article-art-229"
import articleArt23 from "./articles/article-art-23"
import articleArt230 from "./articles/article-art-230"
import articleArt231 from "./articles/article-art-231"
import articleArt232 from "./articles/article-art-232"
import articleArt233 from "./articles/article-art-233"
import articleArt234 from "./articles/article-art-234"
import articleArt235 from "./articles/article-art-235"
import articleArt235a from "./articles/article-art-235a"
import articleArt236 from "./articles/article-art-236"
import articleArt237 from "./articles/article-art-237"
import articleArt238 from "./articles/article-art-238"
import articleArt239 from "./articles/article-art-239"
import articleArt24 from "./articles/article-art-24"
import articleArt240 from "./articles/article-art-240"
import articleArt241 from "./articles/article-art-241"
import articleArt242 from "./articles/article-art-242"
import articleArt243 from "./articles/article-art-243"
import articleArt244 from "./articles/article-art-244"
import articleArt245 from "./articles/article-art-245"
import articleArt246 from "./articles/article-art-246"
import articleArt247 from "./articles/article-art-247"
import articleArt248 from "./articles/article-art-248"
import articleArt249 from "./articles/article-art-249"
import articleArt249a from "./articles/article-art-249a"
import articleArt25 from "./articles/article-art-25"
import articleArt250 from "./articles/article-art-250"
import articleArt251 from "./articles/article-art-251"
import articleArt252 from "./articles/article-art-252"
import articleArt253 from "./articles/article-art-253"
import articleArt254 from "./articles/article-art-254"
import articleArt255 from "./articles/article-art-255"
import articleArt256 from "./articles/article-art-256"
import articleArt257 from "./articles/article-art-257"
import articleArt258 from "./articles/article-art-258"
import articleArt259 from "./articles/article-art-259"
import articleArt26 from "./articles/article-art-26"
import articleArt260 from "./articles/article-art-260"
import articleArt261 from "./articles/article-art-261"
import articleArt262 from "./articles/article-art-262"
import articleArt263 from "./articles/article-art-263"
import articleArt264 from "./articles/article-art-264"
import articleArt265 from "./articles/article-art-265"
import articleArt266 from "./articles/article-art-266"
import articleArt267 from "./articles/article-art-267"
import articleArt268 from "./articles/article-art-268"
import articleArt269 from "./articles/article-art-269"
import articleArt27 from "./articles/article-art-27"
import articleArt270 from "./articles/article-art-270"
import articleArt271 from "./articles/article-art-271"
import articleArt272 from "./articles/article-art-272"
import articleArt273 from "./articles/article-art-273"
import articleArt274 from "./articles/article-art-274"
import articleArt275 from "./articles/article-art-275"
import articleArt276 from "./articles/article-art-276"
import articleArt277 from "./articles/article-art-277"
import articleArt278 from "./articles/article-art-278"
import articleArt279 from "./articles/article-art-279"
import articleArt28 from "./articles/article-art-28"
import articleArt280 from "./articles/article-art-280"
import articleArt281 from "./articles/article-art-281"
import articleArt282 from "./articles/article-art-282"
import articleArt283 from "./articles/article-art-283"
import articleArt284 from "./articles/article-art-284"
import articleArt285 from "./articles/article-art-285"
import articleArt285a from "./articles/article-art-285a"
import articleArt285b from "./articles/article-art-285b"
import articleArt285c from "./articles/article-art-285c"
import articleArt285d from "./articles/article-art-285d"
import articleArt285e from "./articles/article-art-285e"
import articleArt285f from "./articles/article-art-285f"
import articleArt285g from "./articles/article-art-285g"
import articleArt285h from "./articles/article-art-285h"
import articleArt285i from "./articles/article-art-285i"
import articleArt285j from "./articles/article-art-285j"
import articleArt285k from "./articles/article-art-285k"
import articleArt285l from "./articles/article-art-285l"
import articleArt286 from "./articles/article-art-286"
import articleArt287 from "./articles/article-art-287"
import articleArt288 from "./articles/article-art-288"
import articleArt289 from "./articles/article-art-289"
import articleArt29 from "./articles/article-art-29"
import articleArt290 from "./articles/article-art-290"
import articleArt291 from "./articles/article-art-291"
import articleArt292 from "./articles/article-art-292"
import articleArt293 from "./articles/article-art-293"
import articleArt294 from "./articles/article-art-294"
import articleArt295 from "./articles/article-art-295"
import articleArt296 from "./articles/article-art-296"
import articleArt297 from "./articles/article-art-297"
import articleArt298 from "./articles/article-art-298"
import articleArt299 from "./articles/article-art-299"
import articleArt3 from "./articles/article-art-3"
import articleArt30 from "./articles/article-art-30"
import articleArt300 from "./articles/article-art-300"
import articleArt301 from "./articles/article-art-301"
import articleArt31 from "./articles/article-art-31"
import articleArt32 from "./articles/article-art-32"
import articleArt33 from "./articles/article-art-33"
import articleArt34 from "./articles/article-art-34"
import articleArt35 from "./articles/article-art-35"
import articleArt36 from "./articles/article-art-36"
import articleArt37 from "./articles/article-art-37"
import articleArt37a from "./articles/article-art-37a"
import articleArt38 from "./articles/article-art-38"
import articleArt39 from "./articles/article-art-39"
import articleArt4 from "./articles/article-art-4"
import articleArt40 from "./articles/article-art-40"
import articleArt41 from "./articles/article-art-41"
import articleArt42 from "./articles/article-art-42"
import articleArt43 from "./articles/article-art-43"
import articleArt44 from "./articles/article-art-44"
import articleArt45 from "./articles/article-art-45"
import articleArt46 from "./articles/article-art-46"
import articleArt47 from "./articles/article-art-47"
import articleArt48 from "./articles/article-art-48"
import articleArt49 from "./articles/article-art-49"
import articleArt49a from "./articles/article-art-49a"
import articleArt49b from "./articles/article-art-49b"
import articleArt5 from "./articles/article-art-5"
import articleArt50 from "./articles/article-art-50"
import articleArt51 from "./articles/article-art-51"
import articleArt52 from "./articles/article-art-52"
import articleArt53 from "./articles/article-art-53"
import articleArt54 from "./articles/article-art-54"
import articleArt54a from "./articles/article-art-54a"
import articleArt55 from "./articles/article-art-55"
import articleArt56 from "./articles/article-art-56"
import articleArt57 from "./articles/article-art-57"
import articleArt57a from "./articles/article-art-57a"
import articleArt58 from "./articles/article-art-58"
import articleArt59 from "./articles/article-art-59"
import articleArt6 from "./articles/article-art-6"
import articleArt60 from "./articles/article-art-60"
import articleArt61 from "./articles/article-art-61"
import articleArt62 from "./articles/article-art-62"
import articleArt63 from "./articles/article-art-63"
import articleArt64 from "./articles/article-art-64"
import articleArt64a from "./articles/article-art-64a"
import articleArt64b from "./articles/article-art-64b"
import articleArt64c from "./articles/article-art-64c"
import articleArt64d from "./articles/article-art-64d"
import articleArt64e from "./articles/article-art-64e"
import articleArt64f from "./articles/article-art-64f"
import articleArt65 from "./articles/article-art-65"
import articleArt65a from "./articles/article-art-65a"
import articleArt65b from "./articles/article-art-65b"
import articleArt66 from "./articles/article-art-66"
import articleArt67 from "./articles/article-art-67"
import articleArt68 from "./articles/article-art-68"
import articleArt69 from "./articles/article-art-69"
import articleArt7 from "./articles/article-art-7"
import articleArt70 from "./articles/article-art-70"
import articleArt71 from "./articles/article-art-71"
import articleArt72 from "./articles/article-art-72"
import articleArt73 from "./articles/article-art-73"
import articleArt74 from "./articles/article-art-74"
import articleArt74a from "./articles/article-art-74a"
import articleArt75 from "./articles/article-art-75"
import articleArt76 from "./articles/article-art-76"
import articleArt77 from "./articles/article-art-77"
import articleArt78 from "./articles/article-art-78"
import articleArt79 from "./articles/article-art-79"
import articleArt8 from "./articles/article-art-8"
import articleArt80 from "./articles/article-art-80"
import articleArt81 from "./articles/article-art-81"
import articleArt82 from "./articles/article-art-82"
import articleArt83 from "./articles/article-art-83"
import articleArt84 from "./articles/article-art-84"
import articleArt85 from "./articles/article-art-85"
import articleArt86 from "./articles/article-art-86"
import articleArt87 from "./articles/article-art-87"
import articleArt88 from "./articles/article-art-88"
import articleArt89 from "./articles/article-art-89"
import articleArt9 from "./articles/article-art-9"
import articleArt90 from "./articles/article-art-90"
import articleArt91 from "./articles/article-art-91"
import articleArt92 from "./articles/article-art-92"
import articleArt93 from "./articles/article-art-93"
import articleArt94 from "./articles/article-art-94"
import articleArt95 from "./articles/article-art-95"
import articleArt96 from "./articles/article-art-96"
import articleArt97 from "./articles/article-art-97"
import articleArt98 from "./articles/article-art-98"
import articleArt99 from "./articles/article-art-99"

export const ppsaExplanations = mergeEditorialParts([
  articleArt1,
  articleArt10,
  articleArt100,
  articleArt101,
  articleArt102,
  articleArt103,
  articleArt104,
  articleArt105,
  articleArt106,
  articleArt107,
  articleArt108,
  articleArt109,
  articleArt11,
  articleArt110,
  articleArt111,
  articleArt112,
  articleArt113,
  articleArt114,
  articleArt115,
  articleArt116,
  articleArt116a,
  articleArt116b,
  articleArt116c,
  articleArt116d,
  articleArt116e,
  articleArt117,
  articleArt118,
  articleArt119,
  articleArt12,
  articleArt120,
  articleArt121,
  articleArt122,
  articleArt123,
  articleArt124,
  articleArt125,
  articleArt126,
  articleArt127,
  articleArt128,
  articleArt129,
  articleArt12a,
  articleArt12b,
  articleArt13,
  articleArt130,
  articleArt131,
  articleArt132,
  articleArt133,
  articleArt134,
  articleArt135,
  articleArt136,
  articleArt137,
  articleArt138,
  articleArt139,
  articleArt14,
  articleArt140,
  articleArt141,
  articleArt142,
  articleArt143,
  articleArt144,
  articleArt145,
  articleArt145a,
  articleArt146,
  articleArt147,
  articleArt148,
  articleArt149,
  articleArt14a,
  articleArt15,
  articleArt150,
  articleArt151,
  articleArt151a,
  articleArt152,
  articleArt153,
  articleArt154,
  articleArt155,
  articleArt156,
  articleArt157,
  articleArt158,
  articleArt159,
  articleArt16,
  articleArt160,
  articleArt161,
  articleArt162,
  articleArt163,
  articleArt164,
  articleArt165,
  articleArt166,
  articleArt167,
  articleArt167a,
  articleArt168,
  articleArt169,
  articleArt17,
  articleArt170,
  articleArt171,
  articleArt172,
  articleArt173,
  articleArt174,
  articleArt175,
  articleArt176,
  articleArt177,
  articleArt177a,
  articleArt178,
  articleArt178a,
  articleArt179,
  articleArt179a,
  articleArt18,
  articleArt180,
  articleArt181,
  articleArt182,
  articleArt182a,
  articleArt183,
  articleArt184,
  articleArt185,
  articleArt186,
  articleArt187,
  articleArt188,
  articleArt189,
  articleArt19,
  articleArt190,
  articleArt191,
  articleArt192,
  articleArt193,
  articleArt194,
  articleArt195,
  articleArt196,
  articleArt197,
  articleArt198,
  articleArt199,
  articleArt2,
  articleArt20,
  articleArt200,
  articleArt201,
  articleArt202,
  articleArt203,
  articleArt204,
  articleArt205,
  articleArt206,
  articleArt207,
  articleArt208,
  articleArt209,
  articleArt21,
  articleArt210,
  articleArt211,
  articleArt212,
  articleArt213,
  articleArt214,
  articleArt215,
  articleArt216,
  articleArt217,
  articleArt218,
  articleArt219,
  articleArt22,
  articleArt220,
  articleArt221,
  articleArt222,
  articleArt223,
  articleArt224,
  articleArt225,
  articleArt226,
  articleArt227,
  articleArt228,
  articleArt229,
  articleArt23,
  articleArt230,
  articleArt231,
  articleArt232,
  articleArt233,
  articleArt234,
  articleArt235,
  articleArt235a,
  articleArt236,
  articleArt237,
  articleArt238,
  articleArt239,
  articleArt24,
  articleArt240,
  articleArt241,
  articleArt242,
  articleArt243,
  articleArt244,
  articleArt245,
  articleArt246,
  articleArt247,
  articleArt248,
  articleArt249,
  articleArt249a,
  articleArt25,
  articleArt250,
  articleArt251,
  articleArt252,
  articleArt253,
  articleArt254,
  articleArt255,
  articleArt256,
  articleArt257,
  articleArt258,
  articleArt259,
  articleArt26,
  articleArt260,
  articleArt261,
  articleArt262,
  articleArt263,
  articleArt264,
  articleArt265,
  articleArt266,
  articleArt267,
  articleArt268,
  articleArt269,
  articleArt27,
  articleArt270,
  articleArt271,
  articleArt272,
  articleArt273,
  articleArt274,
  articleArt275,
  articleArt276,
  articleArt277,
  articleArt278,
  articleArt279,
  articleArt28,
  articleArt280,
  articleArt281,
  articleArt282,
  articleArt283,
  articleArt284,
  articleArt285,
  articleArt285a,
  articleArt285b,
  articleArt285c,
  articleArt285d,
  articleArt285e,
  articleArt285f,
  articleArt285g,
  articleArt285h,
  articleArt285i,
  articleArt285j,
  articleArt285k,
  articleArt285l,
  articleArt286,
  articleArt287,
  articleArt288,
  articleArt289,
  articleArt29,
  articleArt290,
  articleArt291,
  articleArt292,
  articleArt293,
  articleArt294,
  articleArt295,
  articleArt296,
  articleArt297,
  articleArt298,
  articleArt299,
  articleArt3,
  articleArt30,
  articleArt300,
  articleArt301,
  articleArt31,
  articleArt32,
  articleArt33,
  articleArt34,
  articleArt35,
  articleArt36,
  articleArt37,
  articleArt37a,
  articleArt38,
  articleArt39,
  articleArt4,
  articleArt40,
  articleArt41,
  articleArt42,
  articleArt43,
  articleArt44,
  articleArt45,
  articleArt46,
  articleArt47,
  articleArt48,
  articleArt49,
  articleArt49a,
  articleArt49b,
  articleArt5,
  articleArt50,
  articleArt51,
  articleArt52,
  articleArt53,
  articleArt54,
  articleArt54a,
  articleArt55,
  articleArt56,
  articleArt57,
  articleArt57a,
  articleArt58,
  articleArt59,
  articleArt6,
  articleArt60,
  articleArt61,
  articleArt62,
  articleArt63,
  articleArt64,
  articleArt64a,
  articleArt64b,
  articleArt64c,
  articleArt64d,
  articleArt64e,
  articleArt64f,
  articleArt65,
  articleArt65a,
  articleArt65b,
  articleArt66,
  articleArt67,
  articleArt68,
  articleArt69,
  articleArt7,
  articleArt70,
  articleArt71,
  articleArt72,
  articleArt73,
  articleArt74,
  articleArt74a,
  articleArt75,
  articleArt76,
  articleArt77,
  articleArt78,
  articleArt79,
  articleArt8,
  articleArt80,
  articleArt81,
  articleArt82,
  articleArt83,
  articleArt84,
  articleArt85,
  articleArt86,
  articleArt87,
  articleArt88,
  articleArt89,
  articleArt9,
  articleArt90,
  articleArt91,
  articleArt92,
  articleArt93,
  articleArt94,
  articleArt95,
  articleArt96,
  articleArt97,
  articleArt98,
  articleArt99,
] satisfies readonly EditorialPart<"ppsa">[])
