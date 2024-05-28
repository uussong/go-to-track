# go-to-track

앨범에서 가장 좋아하는, '최애곡'을 뽑는 투표를 만들어 공유하는 서비스

https://go-to-track.vercel.app/

## 기술 스택

![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1723181113898?alt=media&token=91f5bca3-2f4b-446b-8d0f-3c5552885642)

## 프로젝트 구현

- [디렉토리 구조](https://github.com/uussong/go-to-track/wiki/1.-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0)
- [프로젝트 컨벤션](https://github.com/uussong/go-to-track/wiki/2.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [핵심 기능에 집중한 컴포넌트 구성](https://velog.io/@uussong/Suspense%EC%99%80-ErrorBoundary-%ED%99%9C%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%97%AD%ED%95%A0%EC%97%90-%EC%A7%91%EC%A4%91%ED%95%98%EA%B8%B0)

## 서비스 소개

Firebase를 활용한 Google 로그인을 진행합니다. 로그인 후 투표 생성이 가능합니다.

Spotify API를 활용해 가수를 검색하고 해당 가수의 앨범을 선택해 최애곡을 선택하는 투표를 생성할 수 있습니다.

생성된 투표를 공유해 투표 결과를 확인할 수 있습니다.
