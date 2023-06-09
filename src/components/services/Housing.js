import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"

export const Housing = () => {
    return (<Box as='section'>
        <Text as='h6'>Житлові спори – це конфлікти, які виникають між орендарями та орендодавцями, власниками житла та сусідами, покупцями та продавцями чи іншими сторонами, залученими до житлових питань. Житлові спори можуть стосуватися таких питань, як орендна плата, ремонт, депозити, виселення, шум, межі, сервітути, контракти, дискримінація, переслідування або відшкодування збитків. Якщо ви зіткнулися з житловим спором, вам може знадобитися юридична допомога для захисту ваших прав та інтересів. Юрист може допомогти Вам у житлових спорах:</Text>
        <UnorderedList>
            <ListItem>Консультації щодо ваших правових можливостей і зобов'язань згідно із законом і вашим контрактом;</ListItem>
            <ListItem>Переговори з іншою стороною або її адвокатом для досягнення справедливого та розумного врегулювання;</ListItem>
            <ListItem>представництво інтересів у суді чи трибуналі, якщо спір неможливо вирішити поза судом;</ListItem>
            <ListItem>Оскарження будь-яких незаконних або несправедливих дій іншої сторони або її агента;</ListItem>
            <ListItem>Вимагання компенсації або засобів правового захисту за будь-які збитки чи травми, яких ви зазнали.</ListItem>
        </UnorderedList>
        <br />
        <Text as='h6'>Юрист також може допомогти вам запобігти житловим спорам:</Text>
        <UnorderedList>
            <ListItem>Перегляд та складання будь-яких договорів чи угод, що стосуються вашої житлової ситуації;</ListItem>
            <ListItem>Забезпечення того, щоб ви дотримувалися будь-яких правил чи норм, які стосуються вашої власності чи оренди;</ListItem>
            <ListItem>консультування вас щодо вирішення будь-яких питань або скарг, які можуть виникнути від вашого орендодавця, орендаря, сусіда, продавця, покупця чи агента;</ListItem>
            <ListItem>Допомога у вирішенні будь-яких незначних суперечок до того, як вони переростуть у великі.</ListItem>
        </UnorderedList>
    </Box>)
}