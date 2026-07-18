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
import articleArt106a from "./articles/article-art-106a"
import articleArt107 from "./articles/article-art-107"
import articleArt108 from "./articles/article-art-108"
import articleArt109 from "./articles/article-art-109"
import articleArt109a from "./articles/article-art-109a"
import articleArt109b from "./articles/article-art-109b"
import articleArt11 from "./articles/article-art-11"
import articleArt110 from "./articles/article-art-110"
import articleArt111 from "./articles/article-art-111"
import articleArt112 from "./articles/article-art-112"
import articleArt112a from "./articles/article-art-112a"
import articleArt113 from "./articles/article-art-113"
import articleArt113a from "./articles/article-art-113a"
import articleArt113b from "./articles/article-art-113b"
import articleArt114 from "./articles/article-art-114"
import articleArt114a from "./articles/article-art-114a"
import articleArt115 from "./articles/article-art-115"
import articleArt116 from "./articles/article-art-116"
import articleArt117 from "./articles/article-art-117"
import articleArt117a from "./articles/article-art-117a"
import articleArt117b from "./articles/article-art-117b"
import articleArt118 from "./articles/article-art-118"
import articleArt119 from "./articles/article-art-119"
import articleArt12 from "./articles/article-art-12"
import articleArt120 from "./articles/article-art-120"
import articleArt120a from "./articles/article-art-120a"
import articleArt120b from "./articles/article-art-120b"
import articleArt121 from "./articles/article-art-121"
import articleArt122 from "./articles/article-art-122"
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
import articleArt133a from "./articles/article-art-133a"
import articleArt134 from "./articles/article-art-134"
import articleArt134a from "./articles/article-art-134a"
import articleArt135 from "./articles/article-art-135"
import articleArt136 from "./articles/article-art-136"
import articleArt137 from "./articles/article-art-137"
import articleArt137a from "./articles/article-art-137a"
import articleArt137b from "./articles/article-art-137b"
import articleArt137c from "./articles/article-art-137c"
import articleArt137d from "./articles/article-art-137d"
import articleArt137e from "./articles/article-art-137e"
import articleArt138 from "./articles/article-art-138"
import articleArt138a from "./articles/article-art-138a"
import articleArt138b from "./articles/article-art-138b"
import articleArt139 from "./articles/article-art-139"
import articleArt139a from "./articles/article-art-139a"
import articleArt139b from "./articles/article-art-139b"
import articleArt139c from "./articles/article-art-139c"
import articleArt139d from "./articles/article-art-139d"
import articleArt139e from "./articles/article-art-139e"
import articleArt139f from "./articles/article-art-139f"
import articleArt139g from "./articles/article-art-139g"
import articleArt139h from "./articles/article-art-139h"
import articleArt139j from "./articles/article-art-139j"
import articleArt139k from "./articles/article-art-139k"
import articleArt139l from "./articles/article-art-139l"
import articleArt139m from "./articles/article-art-139m"
import articleArt139ma from "./articles/article-art-139ma"
import articleArt139n from "./articles/article-art-139n"
import articleArt139o from "./articles/article-art-139o"
import articleArt139p from "./articles/article-art-139p"
import articleArt139q from "./articles/article-art-139q"
import articleArt139r from "./articles/article-art-139r"
import articleArt139s from "./articles/article-art-139s"
import articleArt139t from "./articles/article-art-139t"
import articleArt139u from "./articles/article-art-139u"
import articleArt139w from "./articles/article-art-139w"
import articleArt14 from "./articles/article-art-14"
import articleArt140 from "./articles/article-art-140"
import articleArt141 from "./articles/article-art-141"
import articleArt142 from "./articles/article-art-142"
import articleArt142a from "./articles/article-art-142a"
import articleArt143 from "./articles/article-art-143"
import articleArt143a from "./articles/article-art-143a"
import articleArt144 from "./articles/article-art-144"
import articleArt144a from "./articles/article-art-144a"
import articleArt144b from "./articles/article-art-144b"
import articleArt145 from "./articles/article-art-145"
import articleArt145a from "./articles/article-art-145a"
import articleArt146 from "./articles/article-art-146"
import articleArt147 from "./articles/article-art-147"
import articleArt148 from "./articles/article-art-148"
import articleArt148b from "./articles/article-art-148b"
import articleArt149 from "./articles/article-art-149"
import articleArt149a from "./articles/article-art-149a"
import articleArt149b from "./articles/article-art-149b"
import articleArt149c from "./articles/article-art-149c"
import articleArt15 from "./articles/article-art-15"
import articleArt150 from "./articles/article-art-150"
import articleArt151 from "./articles/article-art-151"
import articleArt151a from "./articles/article-art-151a"
import articleArt151b from "./articles/article-art-151b"
import articleArt152 from "./articles/article-art-152"
import articleArt153 from "./articles/article-art-153"
import articleArt154 from "./articles/article-art-154"
import articleArt154a from "./articles/article-art-154a"
import articleArt155 from "./articles/article-art-155"
import articleArt155a from "./articles/article-art-155a"
import articleArt156 from "./articles/article-art-156"
import articleArt156a from "./articles/article-art-156a"
import articleArt156b from "./articles/article-art-156b"
import articleArt156c from "./articles/article-art-156c"
import articleArt156d from "./articles/article-art-156d"
import articleArt157 from "./articles/article-art-157"
import articleArt157a from "./articles/article-art-157a"
import articleArt157b from "./articles/article-art-157b"
import articleArt157c from "./articles/article-art-157c"
import articleArt157d from "./articles/article-art-157d"
import articleArt157e from "./articles/article-art-157e"
import articleArt157f from "./articles/article-art-157f"
import articleArt157g from "./articles/article-art-157g"
import articleArt157h from "./articles/article-art-157h"
import articleArt157i from "./articles/article-art-157i"
import articleArt157j from "./articles/article-art-157j"
import articleArt157k from "./articles/article-art-157k"
import articleArt157l from "./articles/article-art-157l"
import articleArt158 from "./articles/article-art-158"
import articleArt158a from "./articles/article-art-158a"
import articleArt159 from "./articles/article-art-159"
import articleArt15a from "./articles/article-art-15a"
import articleArt15b from "./articles/article-art-15b"
import articleArt15c from "./articles/article-art-15c"
import articleArt16 from "./articles/article-art-16"
import articleArt160 from "./articles/article-art-160"
import articleArt161 from "./articles/article-art-161"
import articleArt161a from "./articles/article-art-161a"
import articleArt161b from "./articles/article-art-161b"
import articleArt162 from "./articles/article-art-162"
import articleArt163 from "./articles/article-art-163"
import articleArt164 from "./articles/article-art-164"
import articleArt165 from "./articles/article-art-165"
import articleArt166 from "./articles/article-art-166"
import articleArt166a from "./articles/article-art-166a"
import articleArt166b from "./articles/article-art-166b"
import articleArt167 from "./articles/article-art-167"
import articleArt168 from "./articles/article-art-168"
import articleArt168a from "./articles/article-art-168a"
import articleArt169 from "./articles/article-art-169"
import articleArt169a from "./articles/article-art-169a"
import articleArt169b from "./articles/article-art-169b"
import articleArt169c from "./articles/article-art-169c"
import articleArt17 from "./articles/article-art-17"
import articleArt170 from "./articles/article-art-170"
import articleArt171 from "./articles/article-art-171"
import articleArt172 from "./articles/article-art-172"
import articleArt173 from "./articles/article-art-173"
import articleArt174 from "./articles/article-art-174"
import articleArt175 from "./articles/article-art-175"
import articleArt176 from "./articles/article-art-176"
import articleArt177 from "./articles/article-art-177"
import articleArt178 from "./articles/article-art-178"
import articleArt179 from "./articles/article-art-179"
import articleArt18 from "./articles/article-art-18"
import articleArt180 from "./articles/article-art-180"
import articleArt181 from "./articles/article-art-181"
import articleArt182 from "./articles/article-art-182"
import articleArt183 from "./articles/article-art-183"
import articleArt184 from "./articles/article-art-184"
import articleArt185 from "./articles/article-art-185"
import articleArt185a from "./articles/article-art-185a"
import articleArt185b from "./articles/article-art-185b"
import articleArt185c from "./articles/article-art-185c"
import articleArt186 from "./articles/article-art-186"
import articleArt187 from "./articles/article-art-187"
import articleArt188 from "./articles/article-art-188"
import articleArt189 from "./articles/article-art-189"
import articleArt19 from "./articles/article-art-19"
import articleArt190 from "./articles/article-art-190"
import articleArt190a from "./articles/article-art-190a"
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
import articleArt207a from "./articles/article-art-207a"
import articleArt208 from "./articles/article-art-208"
import articleArt208a from "./articles/article-art-208a"
import articleArt208b from "./articles/article-art-208b"
import articleArt209 from "./articles/article-art-209"
import articleArt21 from "./articles/article-art-21"
import articleArt210 from "./articles/article-art-210"
import articleArt211 from "./articles/article-art-211"
import articleArt212 from "./articles/article-art-212"
import articleArt213 from "./articles/article-art-213"
import articleArt214 from "./articles/article-art-214"
import articleArt214a from "./articles/article-art-214a"
import articleArt215 from "./articles/article-art-215"
import articleArt216 from "./articles/article-art-216"
import articleArt217 from "./articles/article-art-217"
import articleArt218 from "./articles/article-art-218"
import articleArt219 from "./articles/article-art-219"
import articleArt22 from "./articles/article-art-22"
import articleArt220 from "./articles/article-art-220"
import articleArt221 from "./articles/article-art-221"
import articleArt222 from "./articles/article-art-222"
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
import articleArt236 from "./articles/article-art-236"
import articleArt236a from "./articles/article-art-236a"
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
import articleArt248a from "./articles/article-art-248a"
import articleArt249 from "./articles/article-art-249"
import articleArt25 from "./articles/article-art-25"
import articleArt250 from "./articles/article-art-250"
import articleArt251 from "./articles/article-art-251"
import articleArt252 from "./articles/article-art-252"
import articleArt252a from "./articles/article-art-252a"
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
import articleArt302 from "./articles/article-art-302"
import articleArt303 from "./articles/article-art-303"
import articleArt303a from "./articles/article-art-303a"
import articleArt303b from "./articles/article-art-303b"
import articleArt304 from "./articles/article-art-304"
import articleArt305 from "./articles/article-art-305"
import articleArt306 from "./articles/article-art-306"
import articleArt307 from "./articles/article-art-307"
import articleArt308 from "./articles/article-art-308"
import articleArt308a from "./articles/article-art-308a"
import articleArt308b from "./articles/article-art-308b"
import articleArt309 from "./articles/article-art-309"
import articleArt309a from "./articles/article-art-309a"
import articleArt31 from "./articles/article-art-31"
import articleArt310 from "./articles/article-art-310"
import articleArt311 from "./articles/article-art-311"
import articleArt312 from "./articles/article-art-312"
import articleArt313 from "./articles/article-art-313"
import articleArt314 from "./articles/article-art-314"
import articleArt315 from "./articles/article-art-315"
import articleArt316 from "./articles/article-art-316"
import articleArt317 from "./articles/article-art-317"
import articleArt318 from "./articles/article-art-318"
import articleArt319 from "./articles/article-art-319"
import articleArt32 from "./articles/article-art-32"
import articleArt320 from "./articles/article-art-320"
import articleArt321 from "./articles/article-art-321"
import articleArt322 from "./articles/article-art-322"
import articleArt323 from "./articles/article-art-323"
import articleArt324 from "./articles/article-art-324"
import articleArt325 from "./articles/article-art-325"
import articleArt326 from "./articles/article-art-326"
import articleArt327 from "./articles/article-art-327"
import articleArt328 from "./articles/article-art-328"
import articleArt329 from "./articles/article-art-329"
import articleArt329a from "./articles/article-art-329a"
import articleArt32a from "./articles/article-art-32a"
import articleArt33 from "./articles/article-art-33"
import articleArt330 from "./articles/article-art-330"
import articleArt331 from "./articles/article-art-331"
import articleArt332 from "./articles/article-art-332"
import articleArt333 from "./articles/article-art-333"
import articleArt334 from "./articles/article-art-334"
import articleArt334a from "./articles/article-art-334a"
import articleArt335 from "./articles/article-art-335"
import articleArt335a from "./articles/article-art-335a"
import articleArt336 from "./articles/article-art-336"
import articleArt337 from "./articles/article-art-337"
import articleArt338 from "./articles/article-art-338"
import articleArt339 from "./articles/article-art-339"
import articleArt34 from "./articles/article-art-34"
import articleArt340 from "./articles/article-art-340"
import articleArt341 from "./articles/article-art-341"
import articleArt342 from "./articles/article-art-342"
import articleArt343 from "./articles/article-art-343"
import articleArt344 from "./articles/article-art-344"
import articleArt345 from "./articles/article-art-345"
import articleArt346 from "./articles/article-art-346"
import articleArt347 from "./articles/article-art-347"
import articleArt347a from "./articles/article-art-347a"
import articleArt347b from "./articles/article-art-347b"
import articleArt347c from "./articles/article-art-347c"
import articleArt347d from "./articles/article-art-347d"
import articleArt347e from "./articles/article-art-347e"
import articleArt347f from "./articles/article-art-347f"
import articleArt347g from "./articles/article-art-347g"
import articleArt348 from "./articles/article-art-348"
import articleArt349 from "./articles/article-art-349"
import articleArt35 from "./articles/article-art-35"
import articleArt350 from "./articles/article-art-350"
import articleArt351 from "./articles/article-art-351"
import articleArt352 from "./articles/article-art-352"
import articleArt353 from "./articles/article-art-353"
import articleArt354 from "./articles/article-art-354"
import articleArt355 from "./articles/article-art-355"
import articleArt356 from "./articles/article-art-356"
import articleArt357 from "./articles/article-art-357"
import articleArt358 from "./articles/article-art-358"
import articleArt359 from "./articles/article-art-359"
import articleArt359a from "./articles/article-art-359a"
import articleArt359b from "./articles/article-art-359b"
import articleArt359c from "./articles/article-art-359c"
import articleArt36 from "./articles/article-art-36"
import articleArt360 from "./articles/article-art-360"
import articleArt361 from "./articles/article-art-361"
import articleArt362 from "./articles/article-art-362"
import articleArt363 from "./articles/article-art-363"
import articleArt364 from "./articles/article-art-364"
import articleArt365 from "./articles/article-art-365"
import articleArt366 from "./articles/article-art-366"
import articleArt367 from "./articles/article-art-367"
import articleArt368 from "./articles/article-art-368"
import articleArt369 from "./articles/article-art-369"
import articleArt37 from "./articles/article-art-37"
import articleArt370 from "./articles/article-art-370"
import articleArt371 from "./articles/article-art-371"
import articleArt372 from "./articles/article-art-372"
import articleArt373 from "./articles/article-art-373"
import articleArt374 from "./articles/article-art-374"
import articleArt375 from "./articles/article-art-375"
import articleArt376 from "./articles/article-art-376"
import articleArt377 from "./articles/article-art-377"
import articleArt378 from "./articles/article-art-378"
import articleArt379 from "./articles/article-art-379"
import articleArt38 from "./articles/article-art-38"
import articleArt380 from "./articles/article-art-380"
import articleArt381 from "./articles/article-art-381"
import articleArt382 from "./articles/article-art-382"
import articleArt383 from "./articles/article-art-383"
import articleArt384 from "./articles/article-art-384"
import articleArt385 from "./articles/article-art-385"
import articleArt386 from "./articles/article-art-386"
import articleArt387 from "./articles/article-art-387"
import articleArt388 from "./articles/article-art-388"
import articleArt389 from "./articles/article-art-389"
import articleArt39 from "./articles/article-art-39"
import articleArt390 from "./articles/article-art-390"
import articleArt391 from "./articles/article-art-391"
import articleArt392 from "./articles/article-art-392"
import articleArt393 from "./articles/article-art-393"
import articleArt393a from "./articles/article-art-393a"
import articleArt393b from "./articles/article-art-393b"
import articleArt393c from "./articles/article-art-393c"
import articleArt393d from "./articles/article-art-393d"
import articleArt393e from "./articles/article-art-393e"
import articleArt394 from "./articles/article-art-394"
import articleArt395 from "./articles/article-art-395"
import articleArt396 from "./articles/article-art-396"
import articleArt397 from "./articles/article-art-397"
import articleArt398 from "./articles/article-art-398"
import articleArt398a from "./articles/article-art-398a"
import articleArt399 from "./articles/article-art-399"
import articleArt4 from "./articles/article-art-4"
import articleArt40 from "./articles/article-art-40"
import articleArt400 from "./articles/article-art-400"
import articleArt400a from "./articles/article-art-400a"
import articleArt400b from "./articles/article-art-400b"
import articleArt400c from "./articles/article-art-400c"
import articleArt400d from "./articles/article-art-400d"
import articleArt401 from "./articles/article-art-401"
import articleArt402 from "./articles/article-art-402"
import articleArt403 from "./articles/article-art-403"
import articleArt404 from "./articles/article-art-404"
import articleArt405 from "./articles/article-art-405"
import articleArt406 from "./articles/article-art-406"
import articleArt407 from "./articles/article-art-407"
import articleArt408 from "./articles/article-art-408"
import articleArt409 from "./articles/article-art-409"
import articleArt41 from "./articles/article-art-41"
import articleArt410 from "./articles/article-art-410"
import articleArt411 from "./articles/article-art-411"
import articleArt412 from "./articles/article-art-412"
import articleArt413 from "./articles/article-art-413"
import articleArt414 from "./articles/article-art-414"
import articleArt415 from "./articles/article-art-415"
import articleArt416 from "./articles/article-art-416"
import articleArt417 from "./articles/article-art-417"
import articleArt418 from "./articles/article-art-418"
import articleArt419 from "./articles/article-art-419"
import articleArt42 from "./articles/article-art-42"
import articleArt420 from "./articles/article-art-420"
import articleArt421 from "./articles/article-art-421"
import articleArt422 from "./articles/article-art-422"
import articleArt423 from "./articles/article-art-423"
import articleArt424 from "./articles/article-art-424"
import articleArt425 from "./articles/article-art-425"
import articleArt426 from "./articles/article-art-426"
import articleArt427 from "./articles/article-art-427"
import articleArt428 from "./articles/article-art-428"
import articleArt429 from "./articles/article-art-429"
import articleArt43 from "./articles/article-art-43"
import articleArt430 from "./articles/article-art-430"
import articleArt430a from "./articles/article-art-430a"
import articleArt431 from "./articles/article-art-431"
import articleArt432 from "./articles/article-art-432"
import articleArt433 from "./articles/article-art-433"
import articleArt434 from "./articles/article-art-434"
import articleArt435 from "./articles/article-art-435"
import articleArt436 from "./articles/article-art-436"
import articleArt437 from "./articles/article-art-437"
import articleArt438 from "./articles/article-art-438"
import articleArt439 from "./articles/article-art-439"
import articleArt44 from "./articles/article-art-44"
import articleArt440 from "./articles/article-art-440"
import articleArt440a from "./articles/article-art-440a"
import articleArt441 from "./articles/article-art-441"
import articleArt442 from "./articles/article-art-442"
import articleArt443 from "./articles/article-art-443"
import articleArt443a from "./articles/article-art-443a"
import articleArt444 from "./articles/article-art-444"
import articleArt445 from "./articles/article-art-445"
import articleArt446 from "./articles/article-art-446"
import articleArt447 from "./articles/article-art-447"
import articleArt448 from "./articles/article-art-448"
import articleArt448a from "./articles/article-art-448a"
import articleArt448b from "./articles/article-art-448b"
import articleArt449 from "./articles/article-art-449"
import articleArt449a from "./articles/article-art-449a"
import articleArt449b from "./articles/article-art-449b"
import articleArt45 from "./articles/article-art-45"
import articleArt450 from "./articles/article-art-450"
import articleArt451 from "./articles/article-art-451"
import articleArt452 from "./articles/article-art-452"
import articleArt453 from "./articles/article-art-453"
import articleArt454 from "./articles/article-art-454"
import articleArt455 from "./articles/article-art-455"
import articleArt456 from "./articles/article-art-456"
import articleArt457 from "./articles/article-art-457"
import articleArt458 from "./articles/article-art-458"
import articleArt459 from "./articles/article-art-459"
import articleArt46 from "./articles/article-art-46"
import articleArt460 from "./articles/article-art-460"
import articleArt461 from "./articles/article-art-461"
import articleArt461a from "./articles/article-art-461a"
import articleArt461b from "./articles/article-art-461b"
import articleArt461c from "./articles/article-art-461c"
import articleArt461d from "./articles/article-art-461d"
import articleArt461e from "./articles/article-art-461e"
import articleArt462 from "./articles/article-art-462"
import articleArt463 from "./articles/article-art-463"
import articleArt464 from "./articles/article-art-464"
import articleArt465 from "./articles/article-art-465"
import articleArt465a from "./articles/article-art-465a"
import articleArt47 from "./articles/article-art-47"
import articleArt48 from "./articles/article-art-48"
import articleArt49 from "./articles/article-art-49"
import articleArt5 from "./articles/article-art-5"
import articleArt50 from "./articles/article-art-50"
import articleArt507 from "./articles/article-art-507"
import articleArt508 from "./articles/article-art-508"
import articleArt509 from "./articles/article-art-509"
import articleArt51 from "./articles/article-art-51"
import articleArt510 from "./articles/article-art-510"
import articleArt511 from "./articles/article-art-511"
import articleArt512 from "./articles/article-art-512"
import articleArt513 from "./articles/article-art-513"
import articleArt514 from "./articles/article-art-514"
import articleArt515 from "./articles/article-art-515"
import articleArt516 from "./articles/article-art-516"
import articleArt517 from "./articles/article-art-517"
import articleArt518 from "./articles/article-art-518"
import articleArt519 from "./articles/article-art-519"
import articleArt52 from "./articles/article-art-52"
import articleArt520 from "./articles/article-art-520"
import articleArt521 from "./articles/article-art-521"
import articleArt522 from "./articles/article-art-522"
import articleArt53 from "./articles/article-art-53"
import articleArt54 from "./articles/article-art-54"
import articleArt55 from "./articles/article-art-55"
import articleArt55a from "./articles/article-art-55a"
import articleArt55b from "./articles/article-art-55b"
import articleArt56 from "./articles/article-art-56"
import articleArt57 from "./articles/article-art-57"
import articleArt58 from "./articles/article-art-58"
import articleArt59 from "./articles/article-art-59"
import articleArt6 from "./articles/article-art-6"
import articleArt60 from "./articles/article-art-60"
import articleArt61 from "./articles/article-art-61"
import articleArt62 from "./articles/article-art-62"
import articleArt63 from "./articles/article-art-63"
import articleArt64 from "./articles/article-art-64"
import articleArt64a from "./articles/article-art-64a"
import articleArt65 from "./articles/article-art-65"
import articleArt66 from "./articles/article-art-66"
import articleArt66a from "./articles/article-art-66a"
import articleArt67 from "./articles/article-art-67"
import articleArt68 from "./articles/article-art-68"
import articleArt69 from "./articles/article-art-69"
import articleArt7 from "./articles/article-art-7"
import articleArt70 from "./articles/article-art-70"
import articleArt70a from "./articles/article-art-70a"
import articleArt71 from "./articles/article-art-71"
import articleArt72 from "./articles/article-art-72"
import articleArt72a from "./articles/article-art-72a"
import articleArt73 from "./articles/article-art-73"
import articleArt74 from "./articles/article-art-74"
import articleArt74a from "./articles/article-art-74a"
import articleArt74b from "./articles/article-art-74b"
import articleArt75 from "./articles/article-art-75"
import articleArt76 from "./articles/article-art-76"
import articleArt77 from "./articles/article-art-77"
import articleArt77a from "./articles/article-art-77a"
import articleArt77b from "./articles/article-art-77b"
import articleArt77c from "./articles/article-art-77c"
import articleArt78 from "./articles/article-art-78"
import articleArt79 from "./articles/article-art-79"
import articleArt79a from "./articles/article-art-79a"
import articleArt79b from "./articles/article-art-79b"
import articleArt8 from "./articles/article-art-8"
import articleArt80 from "./articles/article-art-80"
import articleArt81 from "./articles/article-art-81"
import articleArt82 from "./articles/article-art-82"
import articleArt83 from "./articles/article-art-83"
import articleArt83a from "./articles/article-art-83a"
import articleArt84 from "./articles/article-art-84"
import articleArt85 from "./articles/article-art-85"
import articleArt86 from "./articles/article-art-86"
import articleArt87 from "./articles/article-art-87"
import articleArt88 from "./articles/article-art-88"
import articleArt89 from "./articles/article-art-89"
import articleArt89a from "./articles/article-art-89a"
import articleArt9 from "./articles/article-art-9"
import articleArt90 from "./articles/article-art-90"
import articleArt91 from "./articles/article-art-91"
import articleArt92 from "./articles/article-art-92"
import articleArt93 from "./articles/article-art-93"
import articleArt94 from "./articles/article-art-94"
import articleArt95 from "./articles/article-art-95"
import articleArt96 from "./articles/article-art-96"
import articleArt96a from "./articles/article-art-96a"
import articleArt97 from "./articles/article-art-97"
import articleArt98 from "./articles/article-art-98"
import articleArt99 from "./articles/article-art-99"
import articleArt9a from "./articles/article-art-9a"
import articleArt25a from "./articles/article-art-25a"
import articleArt58a from "./articles/article-art-58a"
import articleArt58b from "./articles/article-art-58b"
import articleArt77d from "./articles/article-art-77d"
import articleArt87a from "./articles/article-art-87a"
import articleArt106b from "./articles/article-art-106b"
import articleArt106c from "./articles/article-art-106c"
import articleArt106d from "./articles/article-art-106d"
import articleArt106e from "./articles/article-art-106e"
import articleArt106f from "./articles/article-art-106f"
import articleArt106g from "./articles/article-art-106g"
import articleArt106h from "./articles/article-art-106h"
import articleArt106i from "./articles/article-art-106i"
import articleArt106j from "./articles/article-art-106j"
import articleArt106k from "./articles/article-art-106k"
import articleArt106l from "./articles/article-art-106l"
import articleArt113c from "./articles/article-art-113c"
import articleArt120c from "./articles/article-art-120c"
import articleArt203a from "./articles/article-art-203a"
import articleArt203b from "./articles/article-art-203b"
import articleArt203c from "./articles/article-art-203c"
import articleArt203d from "./articles/article-art-203d"
import articleArt203e from "./articles/article-art-203e"
import articleArt203f from "./articles/article-art-203f"
import articleArt203g from "./articles/article-art-203g"
import articleArt203h from "./articles/article-art-203h"
import articleArt203i from "./articles/article-art-203i"
import articleArt207b from "./articles/article-art-207b"
import articleArt218a from "./articles/article-art-218a"
import articleArt219a from "./articles/article-art-219a"
import articleArt219b from "./articles/article-art-219b"
import articleArt219c from "./articles/article-art-219c"
import articleArt219d from "./articles/article-art-219d"
import articleArt219e from "./articles/article-art-219e"
import articleArt219f from "./articles/article-art-219f"
import articleArt219g from "./articles/article-art-219g"
import articleArt219h from "./articles/article-art-219h"
import articleArt219i from "./articles/article-art-219i"
import articleArt222a from "./articles/article-art-222a"
import articleArt222b from "./articles/article-art-222b"
import articleArt222c from "./articles/article-art-222c"
import articleArt222d from "./articles/article-art-222d"
import articleArt222e from "./articles/article-art-222e"
import articleArt222f from "./articles/article-art-222f"
import articleArt222g from "./articles/article-art-222g"
import articleArt223a from "./articles/article-art-223a"
import articleArt225a from "./articles/article-art-225a"
import articleArt225b from "./articles/article-art-225b"
import articleArt225c from "./articles/article-art-225c"
import articleArt225d from "./articles/article-art-225d"
import articleArt225e from "./articles/article-art-225e"
import articleArt225f from "./articles/article-art-225f"
import articleArt225g from "./articles/article-art-225g"
import articleArt225h from "./articles/article-art-225h"
import articleArt225i from "./articles/article-art-225i"
import articleArt281a from "./articles/article-art-281a"
import articleArt281b from "./articles/article-art-281b"
import articleArt281c from "./articles/article-art-281c"
import articleArt314a from "./articles/article-art-314a"

export const foreignersActExplanations = mergeEditorialParts([
  articleArt25a,
  articleArt58a,
  articleArt58b,
  articleArt77d,
  articleArt87a,
  articleArt106b,
  articleArt106c,
  articleArt106d,
  articleArt106e,
  articleArt106f,
  articleArt106g,
  articleArt106h,
  articleArt106i,
  articleArt106j,
  articleArt106k,
  articleArt106l,
  articleArt113c,
  articleArt120c,
  articleArt203a,
  articleArt203b,
  articleArt203c,
  articleArt203d,
  articleArt203e,
  articleArt203f,
  articleArt203g,
  articleArt203h,
  articleArt203i,
  articleArt207b,
  articleArt218a,
  articleArt219a,
  articleArt219b,
  articleArt219c,
  articleArt219d,
  articleArt219e,
  articleArt219f,
  articleArt219g,
  articleArt219h,
  articleArt219i,
  articleArt222a,
  articleArt222b,
  articleArt222c,
  articleArt222d,
  articleArt222e,
  articleArt222f,
  articleArt222g,
  articleArt223a,
  articleArt225a,
  articleArt225b,
  articleArt225c,
  articleArt225d,
  articleArt225e,
  articleArt225f,
  articleArt225g,
  articleArt225h,
  articleArt225i,
  articleArt281a,
  articleArt281b,
  articleArt281c,
  articleArt314a,
  articleArt1,
  articleArt10,
  articleArt100,
  articleArt101,
  articleArt102,
  articleArt103,
  articleArt104,
  articleArt105,
  articleArt106,
  articleArt106a,
  articleArt107,
  articleArt108,
  articleArt109,
  articleArt109a,
  articleArt109b,
  articleArt11,
  articleArt110,
  articleArt111,
  articleArt112,
  articleArt112a,
  articleArt113,
  articleArt113a,
  articleArt113b,
  articleArt114,
  articleArt114a,
  articleArt115,
  articleArt116,
  articleArt117,
  articleArt117a,
  articleArt117b,
  articleArt118,
  articleArt119,
  articleArt12,
  articleArt120,
  articleArt120a,
  articleArt120b,
  articleArt121,
  articleArt122,
  articleArt123,
  articleArt124,
  articleArt125,
  articleArt126,
  articleArt127,
  articleArt127a,
  articleArt128,
  articleArt129,
  articleArt13,
  articleArt130,
  articleArt131,
  articleArt132,
  articleArt133,
  articleArt133a,
  articleArt134,
  articleArt134a,
  articleArt135,
  articleArt136,
  articleArt137,
  articleArt137a,
  articleArt137b,
  articleArt137c,
  articleArt137d,
  articleArt137e,
  articleArt138,
  articleArt138a,
  articleArt138b,
  articleArt139,
  articleArt139a,
  articleArt139b,
  articleArt139c,
  articleArt139d,
  articleArt139e,
  articleArt139f,
  articleArt139g,
  articleArt139h,
  articleArt139j,
  articleArt139k,
  articleArt139l,
  articleArt139m,
  articleArt139ma,
  articleArt139n,
  articleArt139o,
  articleArt139p,
  articleArt139q,
  articleArt139r,
  articleArt139s,
  articleArt139t,
  articleArt139u,
  articleArt139w,
  articleArt14,
  articleArt140,
  articleArt141,
  articleArt142,
  articleArt142a,
  articleArt143,
  articleArt143a,
  articleArt144,
  articleArt144a,
  articleArt144b,
  articleArt145,
  articleArt145a,
  articleArt146,
  articleArt147,
  articleArt148,
  articleArt148b,
  articleArt149,
  articleArt149a,
  articleArt149b,
  articleArt149c,
  articleArt15,
  articleArt150,
  articleArt151,
  articleArt151a,
  articleArt151b,
  articleArt152,
  articleArt153,
  articleArt154,
  articleArt154a,
  articleArt155,
  articleArt155a,
  articleArt156,
  articleArt156a,
  articleArt156b,
  articleArt156c,
  articleArt156d,
  articleArt157,
  articleArt157a,
  articleArt157b,
  articleArt157c,
  articleArt157d,
  articleArt157e,
  articleArt157f,
  articleArt157g,
  articleArt157h,
  articleArt157i,
  articleArt157j,
  articleArt157k,
  articleArt157l,
  articleArt158,
  articleArt158a,
  articleArt159,
  articleArt15a,
  articleArt15b,
  articleArt15c,
  articleArt16,
  articleArt160,
  articleArt161,
  articleArt161a,
  articleArt161b,
  articleArt162,
  articleArt163,
  articleArt164,
  articleArt165,
  articleArt166,
  articleArt166a,
  articleArt166b,
  articleArt167,
  articleArt168,
  articleArt168a,
  articleArt169,
  articleArt169a,
  articleArt169b,
  articleArt169c,
  articleArt17,
  articleArt170,
  articleArt171,
  articleArt172,
  articleArt173,
  articleArt174,
  articleArt175,
  articleArt176,
  articleArt177,
  articleArt178,
  articleArt179,
  articleArt18,
  articleArt180,
  articleArt181,
  articleArt182,
  articleArt183,
  articleArt184,
  articleArt185,
  articleArt185a,
  articleArt185b,
  articleArt185c,
  articleArt186,
  articleArt187,
  articleArt188,
  articleArt189,
  articleArt19,
  articleArt190,
  articleArt190a,
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
  articleArt207a,
  articleArt208,
  articleArt208a,
  articleArt208b,
  articleArt209,
  articleArt21,
  articleArt210,
  articleArt211,
  articleArt212,
  articleArt213,
  articleArt214,
  articleArt214a,
  articleArt215,
  articleArt216,
  articleArt217,
  articleArt218,
  articleArt219,
  articleArt22,
  articleArt220,
  articleArt221,
  articleArt222,
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
  articleArt236,
  articleArt236a,
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
  articleArt248a,
  articleArt249,
  articleArt25,
  articleArt250,
  articleArt251,
  articleArt252,
  articleArt252a,
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
  articleArt302,
  articleArt303,
  articleArt303a,
  articleArt303b,
  articleArt304,
  articleArt305,
  articleArt306,
  articleArt307,
  articleArt308,
  articleArt308a,
  articleArt308b,
  articleArt309,
  articleArt309a,
  articleArt31,
  articleArt310,
  articleArt311,
  articleArt312,
  articleArt313,
  articleArt314,
  articleArt315,
  articleArt316,
  articleArt317,
  articleArt318,
  articleArt319,
  articleArt32,
  articleArt320,
  articleArt321,
  articleArt322,
  articleArt323,
  articleArt324,
  articleArt325,
  articleArt326,
  articleArt327,
  articleArt328,
  articleArt329,
  articleArt329a,
  articleArt32a,
  articleArt33,
  articleArt330,
  articleArt331,
  articleArt332,
  articleArt333,
  articleArt334,
  articleArt334a,
  articleArt335,
  articleArt335a,
  articleArt336,
  articleArt337,
  articleArt338,
  articleArt339,
  articleArt34,
  articleArt340,
  articleArt341,
  articleArt342,
  articleArt343,
  articleArt344,
  articleArt345,
  articleArt346,
  articleArt347,
  articleArt347a,
  articleArt347b,
  articleArt347c,
  articleArt347d,
  articleArt347e,
  articleArt347f,
  articleArt347g,
  articleArt348,
  articleArt349,
  articleArt35,
  articleArt350,
  articleArt351,
  articleArt352,
  articleArt353,
  articleArt354,
  articleArt355,
  articleArt356,
  articleArt357,
  articleArt358,
  articleArt359,
  articleArt359a,
  articleArt359b,
  articleArt359c,
  articleArt36,
  articleArt360,
  articleArt361,
  articleArt362,
  articleArt363,
  articleArt364,
  articleArt365,
  articleArt366,
  articleArt367,
  articleArt368,
  articleArt369,
  articleArt37,
  articleArt370,
  articleArt371,
  articleArt372,
  articleArt373,
  articleArt374,
  articleArt375,
  articleArt376,
  articleArt377,
  articleArt378,
  articleArt379,
  articleArt38,
  articleArt380,
  articleArt381,
  articleArt382,
  articleArt383,
  articleArt384,
  articleArt385,
  articleArt386,
  articleArt387,
  articleArt388,
  articleArt389,
  articleArt39,
  articleArt390,
  articleArt391,
  articleArt392,
  articleArt393,
  articleArt393a,
  articleArt393b,
  articleArt393c,
  articleArt393d,
  articleArt393e,
  articleArt394,
  articleArt395,
  articleArt396,
  articleArt397,
  articleArt398,
  articleArt398a,
  articleArt399,
  articleArt4,
  articleArt40,
  articleArt400,
  articleArt400a,
  articleArt400b,
  articleArt400c,
  articleArt400d,
  articleArt401,
  articleArt402,
  articleArt403,
  articleArt404,
  articleArt405,
  articleArt406,
  articleArt407,
  articleArt408,
  articleArt409,
  articleArt41,
  articleArt410,
  articleArt411,
  articleArt412,
  articleArt413,
  articleArt414,
  articleArt415,
  articleArt416,
  articleArt417,
  articleArt418,
  articleArt419,
  articleArt42,
  articleArt420,
  articleArt421,
  articleArt422,
  articleArt423,
  articleArt424,
  articleArt425,
  articleArt426,
  articleArt427,
  articleArt428,
  articleArt429,
  articleArt43,
  articleArt430,
  articleArt430a,
  articleArt431,
  articleArt432,
  articleArt433,
  articleArt434,
  articleArt435,
  articleArt436,
  articleArt437,
  articleArt438,
  articleArt439,
  articleArt44,
  articleArt440,
  articleArt440a,
  articleArt441,
  articleArt442,
  articleArt443,
  articleArt443a,
  articleArt444,
  articleArt445,
  articleArt446,
  articleArt447,
  articleArt448,
  articleArt448a,
  articleArt448b,
  articleArt449,
  articleArt449a,
  articleArt449b,
  articleArt45,
  articleArt450,
  articleArt451,
  articleArt452,
  articleArt453,
  articleArt454,
  articleArt455,
  articleArt456,
  articleArt457,
  articleArt458,
  articleArt459,
  articleArt46,
  articleArt460,
  articleArt461,
  articleArt461a,
  articleArt461b,
  articleArt461c,
  articleArt461d,
  articleArt461e,
  articleArt462,
  articleArt463,
  articleArt464,
  articleArt465,
  articleArt465a,
  articleArt47,
  articleArt48,
  articleArt49,
  articleArt5,
  articleArt50,
  articleArt507,
  articleArt508,
  articleArt509,
  articleArt51,
  articleArt510,
  articleArt511,
  articleArt512,
  articleArt513,
  articleArt514,
  articleArt515,
  articleArt516,
  articleArt517,
  articleArt518,
  articleArt519,
  articleArt52,
  articleArt520,
  articleArt521,
  articleArt522,
  articleArt53,
  articleArt54,
  articleArt55,
  articleArt55a,
  articleArt55b,
  articleArt56,
  articleArt57,
  articleArt58,
  articleArt59,
  articleArt6,
  articleArt60,
  articleArt61,
  articleArt62,
  articleArt63,
  articleArt64,
  articleArt64a,
  articleArt65,
  articleArt66,
  articleArt66a,
  articleArt67,
  articleArt68,
  articleArt69,
  articleArt7,
  articleArt70,
  articleArt70a,
  articleArt71,
  articleArt72,
  articleArt72a,
  articleArt73,
  articleArt74,
  articleArt74a,
  articleArt74b,
  articleArt75,
  articleArt76,
  articleArt77,
  articleArt77a,
  articleArt77b,
  articleArt77c,
  articleArt78,
  articleArt79,
  articleArt79a,
  articleArt79b,
  articleArt8,
  articleArt80,
  articleArt81,
  articleArt82,
  articleArt83,
  articleArt83a,
  articleArt84,
  articleArt85,
  articleArt86,
  articleArt87,
  articleArt88,
  articleArt89,
  articleArt89a,
  articleArt9,
  articleArt90,
  articleArt91,
  articleArt92,
  articleArt93,
  articleArt94,
  articleArt95,
  articleArt96,
  articleArt96a,
  articleArt97,
  articleArt98,
  articleArt99,
  articleArt9a,
] satisfies readonly EditorialPart<"ustawa-o-cudzoziemcach">[])
