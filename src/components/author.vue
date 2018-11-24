<template>
    <div>
      <van-row class="line" gutter="20">
        <van-col span="8" >
          <img :src="left" alt="" class="left">
        </van-col>
        <van-col span="8" class="text">作者</van-col>
        <van-col span="8">
        </van-col>
      </van-row>

          <van-row class="line">
            <van-col>
              <img :src="img" class="img">
            </van-col>
          </van-row>

      <van-row>
        <van-col class="name">乔治·奥威尔</van-col>
      </van-row>
      <div class="content" >
        <p>英国著名小说家。生于英属印度彭加尔省，庄园》和《1984》是反极权主义的经典名著。他的代表作《动物庄园》是反极权主义的经典名著。
        </p><p>奥威尔的批评风格是一贯的，始终影响他自己的写伤取向，他5总是受到一种写作之外的力量的左右，所以写作的形式、审美意趣对他来说都不是一种目的，他也从来不会为写作技巧本身而去追求其完美。哪怕在讨论其他作家的时候，即使有精致艺术的一面，他也会一掠而过  不再去理会。</p>
        <p>奥威尔是一个以诚实的政治信念来真实写作的作者。在《我为什写作》  中，  他说:“ 在我缺乏政治目的的时候，我所写的东西，无一例外得都毫无生气， 都成了华而不实的段落、没有意义的句子矫揉造作的形容词，总之，都是废话。”</p>
<p>奥威尔短暂的一生，颠沛流离,  疾病缠身，郁郁不得志，一- 直被视为危险的异端。在他为数不多的作品中，《动物庄园》 与《一九八四》都影响巨大，  他以先知般冷峻的笔调勾画出人类阴暗的的未来，令读者心中震颤。他将悲喜剧融为一体，使作品具有极大的张力。奥威尔的卓异之处就在于，并非仅仅用小说来影射个别的人与政权， 而是直接揭露语语言的堕落。在奥威尔眼里， 语言是掩盖真实的幕布，粉饰现实的工具蛊惑民心的艺术。他坚信，在一个语言堕落的时代，作家必须保持自己的独立性，在抵抗暴力和承担苦难的意义，上做一个永远的抗议者。他因品中的深刻思想，  被称为“一代人的冷峻良知”。有评论家如此说:“多一个人看奥威尔， 就多了一份自由的保障。"</p>
        <p>奥威尔以锐目观察，批判以斯大林时代的苏联为首、掩盖在社会主义名义下的极权主义，以辛辣的笔触讽刺泯灭人性的极权主义社会和追逐权力者。小说中对极权主义政权的预言在之后的五十年中也不断地为历史印证，所以两部作品堪称世界文坛政治讽喻小说的经典之作，他因此被称为“一代人的冷峻良知</p>
      </div>
      <hr>
      <van-row>
        <van-col class="text2">他的作品</van-col>
      </van-row>

      <van-row class="bottom" type="flex" justify="space-around">
        <van-col :span="6">
          <img :src="img1" alt="">
        </van-col>
        <van-col span="6">
          <img :src="img2" alt="">
        </van-col>
        <van-col span="6">
          <img :src="img3" alt="">
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-around" class="bottom-text">
        <van-col span="6">一九四八</van-col>
        <van-col span="6">动物农场</van-col>
        <van-col span="6">缅甸岁月</van-col>
      </van-row>
      <van-row type="flex" justify="space-around" class="bottom-text2">
        <van-col span="6">(英)乔治·奥威尔</van-col>
        <van-col span="6">(英)乔治·奥威尔</van-col>
        <van-col span="6">(英)乔治·奥威尔</van-col>
      </van-row>
    </div>
</template>

<script>
    export default {
        name: "author",
      data(){
          return{
            left:require('../img/return.png'),
            img:require('../img/pic-01.jpg'),
            img1:require('../img/miandiansuiyue.png'),
            img2:require('../img/dongwunongchang.png'),
            img3:require('../img/miandiansuiyue.png')
          }
      }
    }
</script>

<style scoped>
  .line{
    border-bottom:1px solid #F4F4F4;
    width: 100%;
  }
  .left{
    float: left;
    margin: 30px  30px;
  }
  .text{
    font-size: 28px;
    color: #121212;
    text-align: center;
    margin-top: 30px;
    font-weight: bolder;
  }
  .img{
    width: 690px;
    margin: 30px 30px 20px 30px;
  }
  .name{
    font-size: 28px;
    color: #121212;
    font-weight: bolder;
    margin-left: 30px;
  }
  .content{
    /*border: 1px solid black;*/
    margin:30px 53px 30px ;

  }
  .content p{
    text-indent:2em;
    font-size: 22px;
    color:rgba(18,18,18,1)

  }
  hr{
    color: #F4F4F4;
    opacity: 0.1;
  }
  .text2{
    margin-left: 30px;
    font-size: 25px;
    font-weight: bolder;
  }
  .bottom{
    margin-top: 48px;
  }
  .bottom-text{
    margin-top: 29px;
    font-size: 25px;
    color: #121212;
    font-weight: bolder;
  }
  .bottom-text2{
    margin-top: 10px;
    font-size: 20px;
    color: #5D5D5E;
    margin-bottom: 48px;
  }


</style>
