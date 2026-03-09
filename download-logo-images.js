// download-logo-images.js
// basic-gallery__logo 클래스가 있는 이미지만 다운로드하는 스크립트

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 브라우저 콘솔에서 추출한 이미지 목록을 여기에 붙여넣기
// 사용 방법:
// 1. https://thinkm.co.kr/24 페이지에서 개발자 도구(F12) 열기
// 2. 콘솔 탭에서 아래 스크립트 실행:
/*
const images = [];
document.querySelectorAll('.basic-gallery__logo img, .basic-gallery__logo').forEach((el, index) => {
  const img = el.tagName === 'IMG' ? el : el.querySelector('img');
  if (img && img.src) {
    const ext = img.src.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)?.[0] || '.jpg';
    const title = el.closest('li')?.querySelector('h3, .title, a')?.textContent?.trim() || `logo-${index + 1}`;
    images.push({
      url: img.src,
      filename: `reference-logo-${String(index + 1).padStart(2, '0')}${ext}`,
      title: title
    });
  }
});
console.log(JSON.stringify(images, null, 2));
*/
// 3. 출력된 JSON을 복사해서 아래 imageList에 붙여넣기

const imageList = [
    [
      [
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_mxln4WfH_e1d0db93e7d50e7c06fe359c104caf5638a5635e_260x160.png",
          "filename": "reference-thumbnail-050.png",
          "title": "[한국미쓰비시엘리베이터] MiAPS Hybrid 솔루션 공급 및 기술지원\n\t\t\t\t\t2025.11",
          "type": "thumbnail",
          "index": 50,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_z6kS2Pfw_87204fce01f13df8af16d202e892c711f8aa237c_260x160.png",
          "filename": "reference-thumbnail-052.png",
          "title": "[경찰청] 모바일 안전드림 앱 대상 MiAPS 솔루션 공급\n\t\t\t\t\t2025.09",
          "type": "thumbnail",
          "index": 52,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_R8feTOYJ_6a7c1b8b57b05e123592ede19012701d4f083a71_260x160.png",
          "filename": "reference-thumbnail-056.png",
          "title": "[캐논코리아] 모바일 WMS MiAPS 솔루션 공급 및 모바일 WMS 구축\n\t\t\t\t\t2025.03",
          "type": "thumbnail",
          "index": 56,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_w5Hcf6bK_a651bd58b75ba7edde96f3dab7776da66aff7e73_260x160.png",
          "filename": "reference-thumbnail-058.png",
          "title": "[LG에너지솔루션] 차세대 ERP 모바일 WM 시스템 MiAPS 솔루션 공급\n\t\t\t\t\t2025.01",
          "type": "thumbnail",
          "index": 58,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_JmjNLRkF_f832319dd2b8ae436c3076210be88d1cee3bf3be_260x160.png",
          "filename": "reference-thumbnail-060.png",
          "title": "[포스코A&C] MiAPS Hybrid 솔루션 및 Push 솔루션, Doc. Viewer 솔루션 공급\n\t\t\t\t\t2024.11",
          "type": "thumbnail",
          "index": 60,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_FSmuHd3i_1d4169a97e9ea103b560db4c0d7fd05ba33d93fb_260x160.png",
          "filename": "reference-thumbnail-061.png",
          "title": "[포스코스틸리온] MiAPS Hybrid 솔루션 및 Push 솔루션, Doc. Viewer 솔루션 공급\n\t\t\t\t\t2024.07",
          "type": "thumbnail",
          "index": 61,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_uG6VvZQx_ef33bc83787ad49bf6367342804c251e00f826df_260x160.png",
          "filename": "reference-thumbnail-063.png",
          "title": "[대림] MiAPS Hybrid 솔루션 및 Push 솔루션 공급\n\t\t\t\t\t2024.06",
          "type": "thumbnail",
          "index": 63,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_9gyH6E31_e610420a006a019989a8d62da0db3b3924108ee9_260x160.png",
          "filename": "reference-thumbnail-064.png",
          "title": "[한국전력공사] MiAPS Hybrid 솔루션 및 Push 솔루션 공급\n\t\t\t\t\t2024.04",
          "type": "thumbnail",
          "index": 64,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_V5aKE791_eaaf4d61cbfdd7cc0392646986aeb1800724b757_260x160.png",
          "filename": "reference-thumbnail-078.png",
          "title": "[아시아나IDT] 에어프레미아 MiAPS 솔루션 공급\n\t\t\t\t\t2022.09",
          "type": "thumbnail",
          "index": 78,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_UG6YcJwt_68a0e32c461f5303f9d243423abec0669021f8b6_260x160.png",
          "filename": "reference-thumbnail-079.png",
          "title": "[LF]MiAPS 솔루션 공급 및 모바일 eCUS(협력업체 시스템) 구축\n\t\t\t\t\t2022.08",
          "type": "thumbnail",
          "index": 79,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_CBkn4SgW_e773d29e029265a54d862c3257a97a2f6e5b82d3_260x160.png",
          "filename": "reference-thumbnail-081.png",
          "title": "[엔투비]통합결재시스템 MiAPS 솔루션 및 모바일 문서변환 솔루션 공급\n\t\t\t\t\t2022.07",
          "type": "thumbnail",
          "index": 81,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_fr69iuWR_1c6e063475cf9f8dad3ca28683d01f65e088e4ed_260x160.png",
          "filename": "reference-thumbnail-082.png",
          "title": "[하나은행]MiAPS 솔루션 공급 및 기업 디지털뱅킹 개편 프로젝트\n\t\t\t\t\t2022.07",
          "type": "thumbnail",
          "index": 82,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_fvjmr6sQ_377974bd77700d915201311c2109d0d096b804ee_260x160.png",
          "filename": "reference-thumbnail-083.png",
          "title": "[SKTNS]MiAPS 솔루션 추가 공급\n\t\t\t\t\t2022.05",
          "type": "thumbnail",
          "index": 83,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_HmC8yZ24_050482c8630b034d12446b64e1b74b24187616a3_260x160.png",
          "filename": "reference-thumbnail-084.png",
          "title": "[CJ푸드빌]MiAPS 솔루션 공급 및 뚜레쥬르 브랜드 앱 구축\n\t\t\t\t\t2022.04",
          "type": "thumbnail",
          "index": 84,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_EXe4fZ7S_bb1856acf1d8158ad275651e5368678bd1db37b8_260x160.png",
          "filename": "reference-thumbnail-086.png",
          "title": "[한국전력공사]협력회사 현장업무용 모바일 플랫폼 구축 MiAPS 솔루션 공급\n\t\t\t\t\t2022.02",
          "type": "thumbnail",
          "index": 86,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_21x3ZeyE_bd7f876b03c831e88ff40ff6050be63799d6acf6_260x160.png",
          "filename": "reference-thumbnail-088.png",
          "title": "[롯데손해보험] MiAPS 솔루션 공급 및 모바일 영업모델 선진화\n\t\t\t\t\t2022.01",
          "type": "thumbnail",
          "index": 88,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_6BoXTKw7_4b1f23f37e7bc1f2d44fc34a3be7cb1320aee336_260x160.png",
          "filename": "reference-thumbnail-090.png",
          "title": "[M캐피탈]MiAPS 솔루션 공급 및 모바일 앱 구축\n\t\t\t\t\t2021.11",
          "type": "thumbnail",
          "index": 90,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_NFAYbJQ9_e59e778f8342c693c6ec2aeda4e3ce493941089e_260x160.png",
          "filename": "reference-thumbnail-091.png",
          "title": "[한네트]MiAPS 솔루션 공급 및 모바일 무인정산 업무시스템 구축\n\t\t\t\t\t2021.11",
          "type": "thumbnail",
          "index": 91,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_Zse5cEdP_7ed25912bf2be62046e8d312e3b33e9c6a77d666_260x160.png",
          "filename": "reference-thumbnail-092.png",
          "title": "[CJ대한통운]MiAPS 솔루션 추가 공급 및 모바일 수송 플랫폼 구축\n\t\t\t\t\t2021.10",
          "type": "thumbnail",
          "index": 92,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_5vSJIdTg_8420ca2ac7ab477e51ae4164d2cf5b6d09e33334_260x160.png",
          "filename": "reference-thumbnail-093.png",
          "title": "[LX판토스]LX판토스 MiAPS 솔루션 공급 및 모바일 WM, TM 시스템 구축\n\t\t\t\t\t2021.09",
          "type": "thumbnail",
          "index": 93,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_4i5BIwAp_2fc4fa578e729289ea9b27f70c5f86912f64241a_260x160.png",
          "filename": "reference-thumbnail-094.png",
          "title": "[고려아연주식회사]MiAPS 솔루션 공급\n\t\t\t\t\t2021.09",
          "type": "thumbnail",
          "index": 94,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_bAQMWUsz_26a12a95af6356ab6f398eb35844fb7bf989f1f7_260x160.png",
          "filename": "reference-thumbnail-099.png",
          "title": "[상상인플러스저축은행]MiAPS 솔루션 공급 및 디지털 금융플랫폼 구축\n\t\t\t\t\t2021.06",
          "type": "thumbnail",
          "index": 99,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_7xU6oRwO_597400b9224dc9cabc3c5a195665ce41c8beb4f8_260x160.png",
          "filename": "reference-thumbnail-100.png",
          "title": "[우리금융저축은행]MiAPS PUSH 솔루션 공급\n\t\t\t\t\t2021.06",
          "type": "thumbnail",
          "index": 100,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_Bis4ZVbO_8e03370e587c82fc6115adb9642ca2697a08b197_260x160.png",
          "filename": "reference-thumbnail-101.png",
          "title": "[BMW파이낸셜서비스코리아]MiAPS PUSH 솔루션 공급\n\t\t\t\t\t2021.05",
          "type": "thumbnail",
          "index": 101,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_mG6ZvP7K_0725af0b42a1a143a538a827dd0741dadf81ee99_260x160.png",
          "filename": "reference-thumbnail-102.png",
          "title": "[KB국민카드]MiAPS 솔루션 공급 및 홈 리뉴얼\n\t\t\t\t\t2021.05",
          "type": "thumbnail",
          "index": 102,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_1xGqs5S6_af0c356701136d3795738592b9774e42a7a3550d_260x160.png",
          "filename": "reference-thumbnail-103.png",
          "title": "[한국전력공사]가상화 모바일 오피스 솔루션 공급\n\t\t\t\t\t2021.05",
          "type": "thumbnail",
          "index": 103,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_0b2WPaok_132ecbf044524eb200f71669f2272a5f6c1895a2_260x160.png",
          "filename": "reference-thumbnail-105.png",
          "title": "[모아저축은행]MiAPS 솔루션 공급 및 디지털 채널 고도화 구축\n\t\t\t\t\t2021.01",
          "type": "thumbnail",
          "index": 105,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_pCjloiQe_03c967a2a4b278b6100fb06ee8c36ec5825546b5_260x160.png",
          "filename": "reference-thumbnail-106.png",
          "title": "[OK저축은행] OK핀테크 베트남 MiAPS PUSH 솔루션(다국어) 공급\n\t\t\t\t\t2020.12",
          "type": "thumbnail",
          "index": 106,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_pqPhTQ4W_5b9e77f064803f82e06ef67a7896440d7dd57afe_260x160.png",
          "filename": "reference-thumbnail-108.png",
          "title": "[롯데정보통신] 차세대 인사시스템 문서뷰어 솔루션 공급\n\t\t\t\t\t2020.11",
          "type": "thumbnail",
          "index": 108,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_r3Vc1KLe_1ed1daef84bef908cbb4319234e9d73fa8ba1608_260x160.png",
          "filename": "reference-thumbnail-109.png",
          "title": "[하나은행]MiAPS 솔루션 공급 및 My 브랜치 사업 프로젝트\n\t\t\t\t\t2020.10",
          "type": "thumbnail",
          "index": 109,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_Vmxha8Ef_0a515c6243117de2d324aadf63d543f341aed8d6_260x160.png",
          "filename": "reference-thumbnail-110.png",
          "title": "[유진저축은행]MiAPS 솔루션 공급 및 디지털 채널 2.0 구축\n\t\t\t\t\t2020.09",
          "type": "thumbnail",
          "index": 110,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_r32TXeEM_9b352b902ebda4706efc50b4d82ce1e28c0bfbd3_260x160.png",
          "filename": "reference-thumbnail-112.png",
          "title": "[한국기업데이터]마이데이터 복지서비스 APP 구축 및 MiAPS 솔루션 공급\n\t\t\t\t\t2020.07",
          "type": "thumbnail",
          "index": 112,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_nmThRVeC_4cd4f60d26039adcda561ee03e51923cc076a0f2_260x160.png",
          "filename": "reference-thumbnail-113.png",
          "title": "[포스코에너지]MiAPS 문서변환 솔루션 공급\n\t\t\t\t\t2020.06",
          "type": "thumbnail",
          "index": 113,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_jvDLbi40_6de1be6b73069054523d034d006495e6b4849129_260x160.png",
          "filename": "reference-thumbnail-114.png",
          "title": "[에스비테크]MiAPS 솔루션 공급\n\t\t\t\t\t2020.06",
          "type": "thumbnail",
          "index": 114,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_wZaumDB0_09788cbe3fc8547bcc7000ac8b8d0c9a15247f79_260x160.png",
          "filename": "reference-thumbnail-115.png",
          "title": "[세보엠이씨]MiAPS 솔루션 공급\n\t\t\t\t\t2020.06",
          "type": "thumbnail",
          "index": 115,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_COSuPjFU_7da9bbe7a9305c014f8ea45b61cc559973b381b9_260x160.png",
          "filename": "reference-thumbnail-117.png",
          "title": "[하나은행]하나원큐 전면개편 MiAPS 솔루션 공급 및 기술지원\n\t\t\t\t\t2020.01",
          "type": "thumbnail",
          "index": 117,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_kxHPflcu_05e1a844de492ca59ee578a28c8f49046656e908_260x160.png",
          "filename": "reference-thumbnail-118.png",
          "title": "[소호마케팅]MiAPS 솔루션 공급 및 기술지원\n\t\t\t\t\t2019.12",
          "type": "thumbnail",
          "index": 118,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_frxKzuVp_855e87a09669a00402a04d78b692b56ed3bb4b16_260x160.png",
          "filename": "reference-thumbnail-119.png",
          "title": "[SK건설]SK TNS 모바일 작업관리 MiAPS 솔루션 공급 및 기술지원\n\t\t\t\t\t2019.12",
          "type": "thumbnail",
          "index": 119,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_XvMI9KQn_d92bfc0b9ff0569d5dbd3ea04d92823bbbed5aed_260x160.png",
          "filename": "reference-thumbnail-121.png",
          "title": "[상상인저축은행]MiAPS 솔루션 공급 및 디지털 금융플랫폼 구축\n\t\t\t\t\t2019.11",
          "type": "thumbnail",
          "index": 121,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_TOQjRFdn_0caca4da5a4ddeedbc30796a273a7386e83d4fdc_260x160.png",
          "filename": "reference-thumbnail-123.png",
          "title": "[LF]MiAPS 솔루션 추가 공급 및 LF 전사 RFID 모바일 시스템 구축\n\t\t\t\t\t2019.05",
          "type": "thumbnail",
          "index": 123,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_BHlf4n8u_26f3911671174b2857d5f17b6c06702acd1f7d8f_260x160.png",
          "filename": "reference-thumbnail-124.png",
          "title": "[한솔 PNS]MiAPS 솔루션 공급\n\t\t\t\t\t2019.05",
          "type": "thumbnail",
          "index": 124,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_x3wfy1s8_fc2a92ce946cdcc8f05f0a8975e875d832afd27e_260x160.png",
          "filename": "reference-thumbnail-125.png",
          "title": "[JTBC ]MiAPS 솔루션 공급\n\t\t\t\t\t2019.05",
          "type": "thumbnail",
          "index": 125,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_o9LhjUlx_c31694df313f7c8e88f2a21c4b433fde4fbb2ad3_260x160.png",
          "filename": "reference-thumbnail-127.png",
          "title": "[아시아나항공]MiAPS 솔루션 추가 공급 및 Crew Tablet 구축\n\t\t\t\t\t2019.03",
          "type": "thumbnail",
          "index": 127,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_53OGTw7h_dca1c1559b5ad50e1067b40b1b52ca7a2d2b5ff3_260x160.png",
          "filename": "reference-thumbnail-128.png",
          "title": "[경남은행]MiAPS 솔루션 공급 및 경남은행 투유뱅크 앱 개편\n\t\t\t\t\t2019.03",
          "type": "thumbnail",
          "index": 128,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_s4OyZGq8_04f688afb87d76a913bffa7c12cc0f468dadaf19_260x160.png",
          "filename": "reference-thumbnail-129.png",
          "title": "[NH저축은행]MiAPS 솔루션 공급 및 디지털뱅킹 시스템 구축\n\t\t\t\t\t2019.01",
          "type": "thumbnail",
          "index": 129,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_bpRFNK0T_9777d0c77f9093299f0f809088759a2a98ab8fa1_260x160.png",
          "filename": "reference-thumbnail-132.png",
          "title": "[금호고속]MiAPS 솔루션 공급\n\t\t\t\t\t2018.12",
          "type": "thumbnail",
          "index": 132,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_QpLjBtJs_a386cbc82756fae0a9aa31e768df7445031efa53_260x160.png",
          "filename": "reference-thumbnail-133.png",
          "title": "[포스코켐텍]MiAPS 문서변환 솔루션 공급\n\t\t\t\t\t2018.12",
          "type": "thumbnail",
          "index": 133,
          "logoType": "logo01"
        },
        {
          "url": "https://thinkm.co.kr/data/file/24/thumb-2084467088_1zAQcXkN_fac43d65b88cb9ba1c003a5ec73d56487204b3a1_260x160.png",
          "filename": "reference-thumbnail-134.png",
          "title": "[아주대학교병원]MiAPS 솔루션 추가 공급 및 모바일 포털 고도화 구축\n\t\t\t\t\t2018.12",
          "type": "thumbnail",
          "index": 134,
          "logoType": "logo01"
        }
      ]
    ]
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const filepath = path.join(__dirname, 'public/assets/images/reference', filename);
    
    // 이미 파일이 있으면 스킵
    if (fs.existsSync(filepath)) {
      console.log(`⊘ 이미 존재: ${filename}`);
      resolve();
      return;
    }
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const stream = fs.createWriteStream(filepath);
        response.pipe(stream);
        stream.on('finish', () => {
          console.log(`✓ 다운로드 완료: ${filename}`);
          resolve();
        });
        stream.on('error', reject);
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 리다이렉트 처리
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`다운로드 실패: ${url} (상태 코드: ${response.statusCode})`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAll = async () => {
  const imagesDir = path.join(__dirname, 'public/assets/images/reference');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 이중 배열을 평평하게 만들기
  const flatImageList = Array.isArray(imageList[0]) && Array.isArray(imageList[0][0]) 
    ? imageList.flat(2) 
    : Array.isArray(imageList[0]) 
    ? imageList.flat() 
    : imageList;

  // logo01만 필터링 (logoType이 "logo01"인 것만)
  const filteredImageList = flatImageList.filter(image => {
    // logoType이 있으면 logo01만, 없으면 모두 포함 (하위 호환성)
    return !image.logoType || image.logoType === 'logo01';
  });

  if (filteredImageList.length === 0) {
    console.log('⚠ 이미지 목록이 비어있습니다.');
    console.log('\n사용 방법:');
    console.log('1. https://thinkm.co.kr/24 페이지에서 개발자 도구(F12) 열기');
    console.log('2. 콘솔에서 아래 스크립트 실행:');
    console.log(`
const images = [];
document.querySelectorAll('.basic-gallery__logo img, .basic-gallery__logo').forEach((el, index) => {
  const img = el.tagName === 'IMG' ? el : el.querySelector('img');
  if (img && img.src) {
    const ext = img.src.match(/\\.(jpg|jpeg|png|gif|webp|svg)/i)?.[0] || '.jpg';
    const title = el.closest('li')?.querySelector('h3, .title, a')?.textContent?.trim() || \`logo-\${index + 1}\`;
    images.push({
      url: img.src,
      filename: \`reference-logo-\${String(index + 1).padStart(2, '0')}\${ext}\`,
      title: title
    });
  }
});
console.log(JSON.stringify(images, null, 2));
    `);
    console.log('3. 출력된 JSON을 복사해서 이 파일의 imageList 배열에 붙여넣기');
    return;
  }

  console.log(`총 ${filteredImageList.length}개의 이미지를 다운로드합니다... (logo01 필터링됨)\n`);
  
  // 디버깅: 이미지 타입별 개수 확인
  const logoCount = filteredImageList.filter(img => img.filename && img.filename.includes('reference-logo-')).length;
  const thumbnailCount = filteredImageList.filter(img => img.filename && img.filename.includes('reference-thumbnail-')).length;
  console.log(`  - 로고 이미지: ${logoCount}개`);
  console.log(`  - 썸네일 이미지: ${thumbnailCount}개\n`);

  for (const image of filteredImageList) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ 다운로드 실패: ${image.filename}`, error.message);
    }
  }

  console.log('\n✅ 다운로드 완료!');
  console.log(`이미지 저장 위치: ${path.join(__dirname, 'public/assets/images/reference')}`);
};

downloadAll();

