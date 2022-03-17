rm -rf build
rm -rf node_modules
rm -rf public/static-post
yarn
yarn global add marked
./scripts/export.sh
yarn build
aws configure list
aws s3 sync --region ap-northeast-2 ./build s3://pongdang.be/
aws cloudfront create-invalidation --distribution-id E3P0PMRFZ71YLG --paths "/*"