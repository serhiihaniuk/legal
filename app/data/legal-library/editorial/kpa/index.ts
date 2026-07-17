import type { LegalExplanation } from "../../contracts"
import {
  mergeEditorialParts,
  type EditorialPart,
} from "../define-editorial-part"

import { kpaEditorialProvisionIndex } from "./provision-index"

import articleArt1 from "./articles/article-art-1"
import articleArt10 from "./articles/article-art-10"
import articleArt100 from "./articles/article-art-100"
import articleArt101 from "./articles/article-art-101"
import articleArt102 from "./articles/article-art-102"
import articleArt103 from "./articles/article-art-103"
import articleArt104 from "./articles/article-art-104"
import articleArt105 from "./articles/article-art-105"
import articleArt106 from "./articles/article-art-106"
import articleArt106a from "./articles/article-art-106a"
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
import articleArt117 from "./articles/article-art-117"
import articleArt118 from "./articles/article-art-118"
import articleArt119 from "./articles/article-art-119"
import articleArt12 from "./articles/article-art-12"
import articleArt120 from "./articles/article-art-120"
import articleArt121 from "./articles/article-art-121"
import articleArt121a from "./articles/article-art-121a"
import articleArt122 from "./articles/article-art-122"
import articleArt122a from "./articles/article-art-122a"
import articleArt122b from "./articles/article-art-122b"
import articleArt122c from "./articles/article-art-122c"
import articleArt122d from "./articles/article-art-122d"
import articleArt122e from "./articles/article-art-122e"
import articleArt122f from "./articles/article-art-122f"
import articleArt122g from "./articles/article-art-122g"
import articleArt122h from "./articles/article-art-122h"
import articleArt123 from "./articles/article-art-123"
import articleArt124 from "./articles/article-art-124"
import articleArt125 from "./articles/article-art-125"
import articleArt126 from "./articles/article-art-126"
import articleArt127 from "./articles/article-art-127"
import articleArt127a from "./articles/article-art-127a"
import articleArt128 from "./articles/article-art-128"
import articleArt129 from "./articles/article-art-129"
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
import articleArt139a from "./articles/article-art-139a"
import articleArt14 from "./articles/article-art-14"
import articleArt140 from "./articles/article-art-140"
import articleArt141 from "./articles/article-art-141"
import articleArt142 from "./articles/article-art-142"
import articleArt143 from "./articles/article-art-143"
import articleArt144 from "./articles/article-art-144"
import articleArt145 from "./articles/article-art-145"
import articleArt145a from "./articles/article-art-145a"
import articleArt145aa from "./articles/article-art-145aa"
import articleArt145b from "./articles/article-art-145b"
import articleArt146 from "./articles/article-art-146"
import articleArt147 from "./articles/article-art-147"
import articleArt148 from "./articles/article-art-148"
import articleArt149 from "./articles/article-art-149"
import articleArt14a from "./articles/article-art-14a"
import articleArt15 from "./articles/article-art-15"
import articleArt150 from "./articles/article-art-150"
import articleArt151 from "./articles/article-art-151"
import articleArt152 from "./articles/article-art-152"
import articleArt153 from "./articles/article-art-153"
import articleArt154 from "./articles/article-art-154"
import articleArt155 from "./articles/article-art-155"
import articleArt155a from "./articles/article-art-155a"
import articleArt156 from "./articles/article-art-156"
import articleArt157 from "./articles/article-art-157"
import articleArt158 from "./articles/article-art-158"
import articleArt159 from "./articles/article-art-159"
import articleArt16 from "./articles/article-art-16"
import articleArt160 from "./articles/article-art-160"
import articleArt161 from "./articles/article-art-161"
import articleArt162 from "./articles/article-art-162"
import articleArt163 from "./articles/article-art-163"
import articleArt163a from "./articles/article-art-163a"
import articleArt163b from "./articles/article-art-163b"
import articleArt163c from "./articles/article-art-163c"
import articleArt163d from "./articles/article-art-163d"
import articleArt163e from "./articles/article-art-163e"
import articleArt163f from "./articles/article-art-163f"
import articleArt163g from "./articles/article-art-163g"
import articleArt17 from "./articles/article-art-17"
import articleArt18 from "./articles/article-art-18"
import articleArt180 from "./articles/article-art-180"
import articleArt181 from "./articles/article-art-181"
import articleArt182 from "./articles/article-art-182"
import articleArt183 from "./articles/article-art-183"
import articleArt184 from "./articles/article-art-184"
import articleArt185 from "./articles/article-art-185"
import articleArt186 from "./articles/article-art-186"
import articleArt187 from "./articles/article-art-187"
import articleArt188 from "./articles/article-art-188"
import articleArt189 from "./articles/article-art-189"
import articleArt189a from "./articles/article-art-189a"
import articleArt189b from "./articles/article-art-189b"
import articleArt189c from "./articles/article-art-189c"
import articleArt189d from "./articles/article-art-189d"
import articleArt189e from "./articles/article-art-189e"
import articleArt189f from "./articles/article-art-189f"
import articleArt189g from "./articles/article-art-189g"
import articleArt189h from "./articles/article-art-189h"
import articleArt189i from "./articles/article-art-189i"
import articleArt189j from "./articles/article-art-189j"
import articleArt189k from "./articles/article-art-189k"
import articleArt189l from "./articles/article-art-189l"
import articleArt19 from "./articles/article-art-19"
import articleArt2 from "./articles/article-art-2"
import articleArt20 from "./articles/article-art-20"
import articleArt21 from "./articles/article-art-21"
import articleArt217 from "./articles/article-art-217"
import articleArt217a from "./articles/article-art-217a"
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
import articleArt226a from "./articles/article-art-226a"
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
import articleArt260a from "./articles/article-art-260a"
import articleArt260b from "./articles/article-art-260b"
import articleArt260c from "./articles/article-art-260c"
import articleArt260d from "./articles/article-art-260d"
import articleArt260e from "./articles/article-art-260e"
import articleArt260f from "./articles/article-art-260f"
import articleArt260g from "./articles/article-art-260g"
import articleArt261 from "./articles/article-art-261"
import articleArt262 from "./articles/article-art-262"
import articleArt263 from "./articles/article-art-263"
import articleArt263a from "./articles/article-art-263a"
import articleArt264 from "./articles/article-art-264"
import articleArt265 from "./articles/article-art-265"
import articleArt266 from "./articles/article-art-266"
import articleArt267 from "./articles/article-art-267"
import articleArt268 from "./articles/article-art-268"
import articleArt268a from "./articles/article-art-268a"
import articleArt269 from "./articles/article-art-269"
import articleArt27 from "./articles/article-art-27"
import articleArt27a from "./articles/article-art-27a"
import articleArt28 from "./articles/article-art-28"
import articleArt29 from "./articles/article-art-29"
import articleArt2a from "./articles/article-art-2a"
import articleArt3 from "./articles/article-art-3"
import articleArt30 from "./articles/article-art-30"
import articleArt31 from "./articles/article-art-31"
import articleArt32 from "./articles/article-art-32"
import articleArt33 from "./articles/article-art-33"
import articleArt34 from "./articles/article-art-34"
import articleArt35 from "./articles/article-art-35"
import articleArt36 from "./articles/article-art-36"
import articleArt37 from "./articles/article-art-37"
import articleArt38 from "./articles/article-art-38"
import articleArt391 from "./articles/article-art-39-1"
import articleArt392 from "./articles/article-art-39-2"
import articleArt393 from "./articles/article-art-39-3"
import articleArt394 from "./articles/article-art-39-4"
import articleArt39 from "./articles/article-art-39"
import articleArt4 from "./articles/article-art-4"
import articleArt40 from "./articles/article-art-40"
import articleArt41 from "./articles/article-art-41"
import articleArt42 from "./articles/article-art-42"
import articleArt43 from "./articles/article-art-43"
import articleArt44 from "./articles/article-art-44"
import articleArt45 from "./articles/article-art-45"
import articleArt45a from "./articles/article-art-45a"
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
import articleArt55 from "./articles/article-art-55"
import articleArt56 from "./articles/article-art-56"
import articleArt57 from "./articles/article-art-57"
import articleArt58 from "./articles/article-art-58"
import articleArt59 from "./articles/article-art-59"
import articleArt6 from "./articles/article-art-6"
import articleArt60 from "./articles/article-art-60"
import articleArt61 from "./articles/article-art-61"
import articleArt61a from "./articles/article-art-61a"
import articleArt62 from "./articles/article-art-62"
import articleArt63 from "./articles/article-art-63"
import articleArt64 from "./articles/article-art-64"
import articleArt65 from "./articles/article-art-65"
import articleArt66 from "./articles/article-art-66"
import articleArt66a from "./articles/article-art-66a"
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
import articleArt76a from "./articles/article-art-76a"
import articleArt77 from "./articles/article-art-77"
import articleArt78 from "./articles/article-art-78"
import articleArt79 from "./articles/article-art-79"
import articleArt79a from "./articles/article-art-79a"
import articleArt7a from "./articles/article-art-7a"
import articleArt7b from "./articles/article-art-7b"
import articleArt8 from "./articles/article-art-8"
import articleArt80 from "./articles/article-art-80"
import articleArt81 from "./articles/article-art-81"
import articleArt81a from "./articles/article-art-81a"
import articleArt82 from "./articles/article-art-82"
import articleArt83 from "./articles/article-art-83"
import articleArt84 from "./articles/article-art-84"
import articleArt85 from "./articles/article-art-85"
import articleArt86 from "./articles/article-art-86"
import articleArt87 from "./articles/article-art-87"
import articleArt88 from "./articles/article-art-88"
import articleArt88a from "./articles/article-art-88a"
import articleArt89 from "./articles/article-art-89"
import articleArt9 from "./articles/article-art-9"
import articleArt90 from "./articles/article-art-90"
import articleArt91 from "./articles/article-art-91"
import articleArt92 from "./articles/article-art-92"
import articleArt93 from "./articles/article-art-93"
import articleArt93a from "./articles/article-art-93a"
import articleArt94 from "./articles/article-art-94"
import articleArt95 from "./articles/article-art-95"
import articleArt96 from "./articles/article-art-96"
import articleArt96a from "./articles/article-art-96a"
import articleArt96b from "./articles/article-art-96b"
import articleArt96c from "./articles/article-art-96c"
import articleArt96d from "./articles/article-art-96d"
import articleArt96e from "./articles/article-art-96e"
import articleArt96f from "./articles/article-art-96f"
import articleArt96g from "./articles/article-art-96g"
import articleArt96h from "./articles/article-art-96h"
import articleArt96i from "./articles/article-art-96i"
import articleArt96j from "./articles/article-art-96j"
import articleArt96k from "./articles/article-art-96k"
import articleArt96l from "./articles/article-art-96l"
import articleArt96m from "./articles/article-art-96m"
import articleArt96n from "./articles/article-art-96n"
import articleArt97 from "./articles/article-art-97"
import articleArt98 from "./articles/article-art-98"
import articleArt99 from "./articles/article-art-99"

const articleByProvisionId = {
  "kpa-art-1": articleArt1,
  "kpa-art-10": articleArt10,
  "kpa-art-100": articleArt100,
  "kpa-art-101": articleArt101,
  "kpa-art-102": articleArt102,
  "kpa-art-103": articleArt103,
  "kpa-art-104": articleArt104,
  "kpa-art-105": articleArt105,
  "kpa-art-106": articleArt106,
  "kpa-art-106a": articleArt106a,
  "kpa-art-107": articleArt107,
  "kpa-art-108": articleArt108,
  "kpa-art-109": articleArt109,
  "kpa-art-11": articleArt11,
  "kpa-art-110": articleArt110,
  "kpa-art-111": articleArt111,
  "kpa-art-112": articleArt112,
  "kpa-art-113": articleArt113,
  "kpa-art-114": articleArt114,
  "kpa-art-115": articleArt115,
  "kpa-art-116": articleArt116,
  "kpa-art-117": articleArt117,
  "kpa-art-118": articleArt118,
  "kpa-art-119": articleArt119,
  "kpa-art-12": articleArt12,
  "kpa-art-120": articleArt120,
  "kpa-art-121": articleArt121,
  "kpa-art-121a": articleArt121a,
  "kpa-art-122": articleArt122,
  "kpa-art-122a": articleArt122a,
  "kpa-art-122b": articleArt122b,
  "kpa-art-122c": articleArt122c,
  "kpa-art-122d": articleArt122d,
  "kpa-art-122e": articleArt122e,
  "kpa-art-122f": articleArt122f,
  "kpa-art-122g": articleArt122g,
  "kpa-art-122h": articleArt122h,
  "kpa-art-123": articleArt123,
  "kpa-art-124": articleArt124,
  "kpa-art-125": articleArt125,
  "kpa-art-126": articleArt126,
  "kpa-art-127": articleArt127,
  "kpa-art-127a": articleArt127a,
  "kpa-art-128": articleArt128,
  "kpa-art-129": articleArt129,
  "kpa-art-13": articleArt13,
  "kpa-art-130": articleArt130,
  "kpa-art-131": articleArt131,
  "kpa-art-132": articleArt132,
  "kpa-art-133": articleArt133,
  "kpa-art-134": articleArt134,
  "kpa-art-135": articleArt135,
  "kpa-art-136": articleArt136,
  "kpa-art-137": articleArt137,
  "kpa-art-138": articleArt138,
  "kpa-art-139": articleArt139,
  "kpa-art-139a": articleArt139a,
  "kpa-art-14": articleArt14,
  "kpa-art-140": articleArt140,
  "kpa-art-141": articleArt141,
  "kpa-art-142": articleArt142,
  "kpa-art-143": articleArt143,
  "kpa-art-144": articleArt144,
  "kpa-art-145": articleArt145,
  "kpa-art-145a": articleArt145a,
  "kpa-art-145aa": articleArt145aa,
  "kpa-art-145b": articleArt145b,
  "kpa-art-146": articleArt146,
  "kpa-art-147": articleArt147,
  "kpa-art-148": articleArt148,
  "kpa-art-149": articleArt149,
  "kpa-art-14a": articleArt14a,
  "kpa-art-15": articleArt15,
  "kpa-art-150": articleArt150,
  "kpa-art-151": articleArt151,
  "kpa-art-152": articleArt152,
  "kpa-art-153": articleArt153,
  "kpa-art-154": articleArt154,
  "kpa-art-155": articleArt155,
  "kpa-art-155a": articleArt155a,
  "kpa-art-156": articleArt156,
  "kpa-art-157": articleArt157,
  "kpa-art-158": articleArt158,
  "kpa-art-159": articleArt159,
  "kpa-art-16": articleArt16,
  "kpa-art-160": articleArt160,
  "kpa-art-161": articleArt161,
  "kpa-art-162": articleArt162,
  "kpa-art-163": articleArt163,
  "kpa-art-163a": articleArt163a,
  "kpa-art-163b": articleArt163b,
  "kpa-art-163c": articleArt163c,
  "kpa-art-163d": articleArt163d,
  "kpa-art-163e": articleArt163e,
  "kpa-art-163f": articleArt163f,
  "kpa-art-163g": articleArt163g,
  "kpa-art-17": articleArt17,
  "kpa-art-18": articleArt18,
  "kpa-art-180": articleArt180,
  "kpa-art-181": articleArt181,
  "kpa-art-182": articleArt182,
  "kpa-art-183": articleArt183,
  "kpa-art-184": articleArt184,
  "kpa-art-185": articleArt185,
  "kpa-art-186": articleArt186,
  "kpa-art-187": articleArt187,
  "kpa-art-188": articleArt188,
  "kpa-art-189": articleArt189,
  "kpa-art-189a": articleArt189a,
  "kpa-art-189b": articleArt189b,
  "kpa-art-189c": articleArt189c,
  "kpa-art-189d": articleArt189d,
  "kpa-art-189e": articleArt189e,
  "kpa-art-189f": articleArt189f,
  "kpa-art-189g": articleArt189g,
  "kpa-art-189h": articleArt189h,
  "kpa-art-189i": articleArt189i,
  "kpa-art-189j": articleArt189j,
  "kpa-art-189k": articleArt189k,
  "kpa-art-189l": articleArt189l,
  "kpa-art-19": articleArt19,
  "kpa-art-2": articleArt2,
  "kpa-art-20": articleArt20,
  "kpa-art-21": articleArt21,
  "kpa-art-217": articleArt217,
  "kpa-art-217a": articleArt217a,
  "kpa-art-218": articleArt218,
  "kpa-art-219": articleArt219,
  "kpa-art-22": articleArt22,
  "kpa-art-220": articleArt220,
  "kpa-art-221": articleArt221,
  "kpa-art-222": articleArt222,
  "kpa-art-223": articleArt223,
  "kpa-art-224": articleArt224,
  "kpa-art-225": articleArt225,
  "kpa-art-226": articleArt226,
  "kpa-art-226a": articleArt226a,
  "kpa-art-227": articleArt227,
  "kpa-art-228": articleArt228,
  "kpa-art-229": articleArt229,
  "kpa-art-23": articleArt23,
  "kpa-art-230": articleArt230,
  "kpa-art-231": articleArt231,
  "kpa-art-232": articleArt232,
  "kpa-art-233": articleArt233,
  "kpa-art-234": articleArt234,
  "kpa-art-235": articleArt235,
  "kpa-art-236": articleArt236,
  "kpa-art-237": articleArt237,
  "kpa-art-238": articleArt238,
  "kpa-art-239": articleArt239,
  "kpa-art-24": articleArt24,
  "kpa-art-240": articleArt240,
  "kpa-art-241": articleArt241,
  "kpa-art-242": articleArt242,
  "kpa-art-243": articleArt243,
  "kpa-art-244": articleArt244,
  "kpa-art-245": articleArt245,
  "kpa-art-246": articleArt246,
  "kpa-art-247": articleArt247,
  "kpa-art-248": articleArt248,
  "kpa-art-249": articleArt249,
  "kpa-art-25": articleArt25,
  "kpa-art-250": articleArt250,
  "kpa-art-251": articleArt251,
  "kpa-art-252": articleArt252,
  "kpa-art-253": articleArt253,
  "kpa-art-254": articleArt254,
  "kpa-art-255": articleArt255,
  "kpa-art-256": articleArt256,
  "kpa-art-257": articleArt257,
  "kpa-art-258": articleArt258,
  "kpa-art-259": articleArt259,
  "kpa-art-26": articleArt26,
  "kpa-art-260": articleArt260,
  "kpa-art-260a": articleArt260a,
  "kpa-art-260b": articleArt260b,
  "kpa-art-260c": articleArt260c,
  "kpa-art-260d": articleArt260d,
  "kpa-art-260e": articleArt260e,
  "kpa-art-260f": articleArt260f,
  "kpa-art-260g": articleArt260g,
  "kpa-art-261": articleArt261,
  "kpa-art-262": articleArt262,
  "kpa-art-263": articleArt263,
  "kpa-art-263a": articleArt263a,
  "kpa-art-264": articleArt264,
  "kpa-art-265": articleArt265,
  "kpa-art-266": articleArt266,
  "kpa-art-267": articleArt267,
  "kpa-art-268": articleArt268,
  "kpa-art-268a": articleArt268a,
  "kpa-art-269": articleArt269,
  "kpa-art-27": articleArt27,
  "kpa-art-27a": articleArt27a,
  "kpa-art-28": articleArt28,
  "kpa-art-29": articleArt29,
  "kpa-art-2a": articleArt2a,
  "kpa-art-3": articleArt3,
  "kpa-art-30": articleArt30,
  "kpa-art-31": articleArt31,
  "kpa-art-32": articleArt32,
  "kpa-art-33": articleArt33,
  "kpa-art-34": articleArt34,
  "kpa-art-35": articleArt35,
  "kpa-art-36": articleArt36,
  "kpa-art-37": articleArt37,
  "kpa-art-38": articleArt38,
  "kpa-art-39-1": articleArt391,
  "kpa-art-39-2": articleArt392,
  "kpa-art-39-3": articleArt393,
  "kpa-art-39-4": articleArt394,
  "kpa-art-39": articleArt39,
  "kpa-art-4": articleArt4,
  "kpa-art-40": articleArt40,
  "kpa-art-41": articleArt41,
  "kpa-art-42": articleArt42,
  "kpa-art-43": articleArt43,
  "kpa-art-44": articleArt44,
  "kpa-art-45": articleArt45,
  "kpa-art-45a": articleArt45a,
  "kpa-art-46": articleArt46,
  "kpa-art-47": articleArt47,
  "kpa-art-48": articleArt48,
  "kpa-art-49": articleArt49,
  "kpa-art-49a": articleArt49a,
  "kpa-art-49b": articleArt49b,
  "kpa-art-5": articleArt5,
  "kpa-art-50": articleArt50,
  "kpa-art-51": articleArt51,
  "kpa-art-52": articleArt52,
  "kpa-art-53": articleArt53,
  "kpa-art-54": articleArt54,
  "kpa-art-55": articleArt55,
  "kpa-art-56": articleArt56,
  "kpa-art-57": articleArt57,
  "kpa-art-58": articleArt58,
  "kpa-art-59": articleArt59,
  "kpa-art-6": articleArt6,
  "kpa-art-60": articleArt60,
  "kpa-art-61": articleArt61,
  "kpa-art-61a": articleArt61a,
  "kpa-art-62": articleArt62,
  "kpa-art-63": articleArt63,
  "kpa-art-64": articleArt64,
  "kpa-art-65": articleArt65,
  "kpa-art-66": articleArt66,
  "kpa-art-66a": articleArt66a,
  "kpa-art-67": articleArt67,
  "kpa-art-68": articleArt68,
  "kpa-art-69": articleArt69,
  "kpa-art-7": articleArt7,
  "kpa-art-70": articleArt70,
  "kpa-art-71": articleArt71,
  "kpa-art-72": articleArt72,
  "kpa-art-73": articleArt73,
  "kpa-art-74": articleArt74,
  "kpa-art-74a": articleArt74a,
  "kpa-art-75": articleArt75,
  "kpa-art-76": articleArt76,
  "kpa-art-76a": articleArt76a,
  "kpa-art-77": articleArt77,
  "kpa-art-78": articleArt78,
  "kpa-art-79": articleArt79,
  "kpa-art-79a": articleArt79a,
  "kpa-art-7a": articleArt7a,
  "kpa-art-7b": articleArt7b,
  "kpa-art-8": articleArt8,
  "kpa-art-80": articleArt80,
  "kpa-art-81": articleArt81,
  "kpa-art-81a": articleArt81a,
  "kpa-art-82": articleArt82,
  "kpa-art-83": articleArt83,
  "kpa-art-84": articleArt84,
  "kpa-art-85": articleArt85,
  "kpa-art-86": articleArt86,
  "kpa-art-87": articleArt87,
  "kpa-art-88": articleArt88,
  "kpa-art-88a": articleArt88a,
  "kpa-art-89": articleArt89,
  "kpa-art-9": articleArt9,
  "kpa-art-90": articleArt90,
  "kpa-art-91": articleArt91,
  "kpa-art-92": articleArt92,
  "kpa-art-93": articleArt93,
  "kpa-art-93a": articleArt93a,
  "kpa-art-94": articleArt94,
  "kpa-art-95": articleArt95,
  "kpa-art-96": articleArt96,
  "kpa-art-96a": articleArt96a,
  "kpa-art-96b": articleArt96b,
  "kpa-art-96c": articleArt96c,
  "kpa-art-96d": articleArt96d,
  "kpa-art-96e": articleArt96e,
  "kpa-art-96f": articleArt96f,
  "kpa-art-96g": articleArt96g,
  "kpa-art-96h": articleArt96h,
  "kpa-art-96i": articleArt96i,
  "kpa-art-96j": articleArt96j,
  "kpa-art-96k": articleArt96k,
  "kpa-art-96l": articleArt96l,
  "kpa-art-96m": articleArt96m,
  "kpa-art-96n": articleArt96n,
  "kpa-art-97": articleArt97,
  "kpa-art-98": articleArt98,
  "kpa-art-99": articleArt99,
} satisfies Readonly<Record<string, EditorialPart<"kpa">>>

/** Canonical KPA table used by the generic legal-library editorial loader. */
export async function loadKpaExplanations(): Promise<
  Readonly<Record<string, LegalExplanation<"kpa">>>
> {
  return mergeEditorialParts(
    kpaEditorialProvisionIndex.map(
      ({ provisionId }) => articleByProvisionId[provisionId]
    )
  )
}

export async function getKpaArticleExplanation(article: string) {
  const entry = kpaEditorialProvisionIndex.find(
    (candidate) => candidate.article === article
  )
  if (!entry) return undefined
  return articleByProvisionId[entry.provisionId]?.[entry.provisionId]
}

export async function getKpaArticleExplanations(articles: readonly string[]) {
  return articles.flatMap((article) => {
    const entry = kpaEditorialProvisionIndex.find(
      (candidate) => candidate.article === article
    )
    const explanation = entry
      ? articleByProvisionId[entry.provisionId]?.[entry.provisionId]
      : undefined
    return explanation ? [explanation] : []
  })
}
