import React, { useContext, useState } from "react";
import "./Dashboard.css";
import logo from "../images/SkyServe_logo.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import ErrorIcon from "@mui/icons-material/Error";
import FolderIcon from "@mui/icons-material/Folder";
import SearchIcon from "@mui/icons-material/Search";
import { UserContext } from "../../context/UserContext";
import BasicMenu from "../MaterialIcons/Menu";
const Dashboard = () => {
  const [size, setSize] = useState("left");
  const { user } = useContext(UserContext);
  console.log(size);
  return (
    <div className="dashboard-container">
      <div className={size}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <hr />
        <div>
          <SpeedIcon />
          Summary
        </div>
        <hr />
        <div>
          <SettingsIcon />
          API Calls
        </div>
        <hr />
        <div>
          <ErrorIcon />
          Errors
        </div>
        <hr />
        <div>
          <FolderIcon />
          Longest Requests
        </div>
        <hr />
        <div
          onClick={() => {
            if (size == "left") {
              setSize("min-left");
            } else {
              setSize("left");
            }
          }}
          style={{
            textAlign: "center",
            marginTop: "40px",
            width: "40px",
            height: "40px",
            padding: "0px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            backgroundColor: "rgb(140 142 165)",
          }}
        >
          {size == "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </div>
      </div>
      <div className="right">
        <div className="dashboard-nav">
          <div>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div>
            {user.name}
            <BasicMenu />
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        tenetur ipsum illum dolorem veniam sed repudiandae beatae quae possimus
        consequatur magni velit, incidunt animi, nulla placeat, impedit itaque
        quis maxime? Pariatur quaerat, ea dolor eligendi corrupti voluptatibus
        eveniet autem ratione voluptatem reprehenderit eos dolore eius a quis
        sit magni temporibus velit saepe id at totam laudantium nesciunt rerum!
        Dignissimos, laboriosam. Veniam rerum nisi laboriosam fuga nam. Tempore
        sint ea deleniti est, harum ex obcaecati beatae fuga commodi perferendis
        ab facere nemo, deserunt ipsum libero voluptate sunt aliquam error,
        asperiores non! Ullam dolor iure magnam eligendi soluta odio, nemo
        placeat voluptatibus sit inventore ut voluptates, laboriosam dolores
        corporis at? Porro blanditiis corrupti commodi libero quidem alias
        reiciendis veritatis officiis iure a. Iure in, repellendus non expedita
        numquam adipisci dolorem sunt laudantium ipsa est! Excepturi quo
        necessitatibus soluta unde, beatae eos! Pariatur laudantium est veniam,
        nobis sint eius libero sit porro reiciendis. Amet non quasi id debitis
        minima maxime numquam in quibusdam voluptatum praesentium beatae culpa
        voluptatibus at, consequatur doloremque dolorum asperiores. Deserunt
        consequatur corporis magnam illo sunt laudantium quaerat officiis
        eveniet? Maxime placeat commodi fuga maiores harum explicabo laboriosam
        ipsum dignissimos repellendus optio nostrum amet dolore, accusantium
        debitis quod. Ipsa quasi est distinctio, sed iste explicabo maxime
        deserunt facere repellat alias. Quam temporibus fuga qui eveniet
        accusamus earum dolor, magnam reprehenderit exercitationem assumenda
        rerum, incidunt hic vero, illum ipsam. Fugiat, quaerat perferendis
        laboriosam sequi natus omnis placeat nihil doloribus deserunt eligendi?
        Quibusdam voluptatum laboriosam rerum est quod recusandae odit. Earum
        facere libero quae, dolor culpa voluptatibus ipsam nam maxime at
        consequatur natus delectus tempora similique possimus dolore aliquid sit
        quisquam repellendus? Autem ipsum dignissimos, quos quibusdam nemo hic
        earum libero vel nulla voluptatibus id ipsa. Nostrum, odio quis! Aperiam
        ab, corrupti ratione labore sit quae repellendus illum, earum autem iure
        alias! Aperiam ipsum vitae, ipsa ratione deleniti consectetur nostrum
        expedita molestias dicta dolorum, impedit veritatis doloremque vel
        labore necessitatibus non, numquam voluptates excepturi laborum fugiat
        illum asperiores? Facilis facere hic explicabo! Quidem sapiente
        veritatis possimus iste labore ea dolorum maiores, voluptas et non
        voluptatem cupiditate ut fuga tempora animi magni distinctio hic
        similique praesentium debitis? Aspernatur totam facere commodi qui? Hic!
        Dolor nulla ea laudantium vero consequatur obcaecati, qui blanditiis
        iure, recusandae omnis laborum sint eaque? Animi repellendus repudiandae
        ullam, rem quod error. Repellat voluptates facilis suscipit obcaecati
        minus, deserunt eum? Sint debitis rerum cumque necessitatibus quod ullam
        temporibus libero doloribus dolores officiis, natus, omnis et reiciendis
        sed. Voluptatem, eum est quia fuga commodi exercitationem, neque
        repudiandae quos quas repellendus omnis? Nulla hic ipsum esse! Dolorum
        quasi explicabo temporibus, sequi facilis non, eaque expedita atque ea
        dolores consequuntur excepturi fugit rem quos debitis maxime quibusdam
        officia similique et mollitia tempore! Omnis? Voluptas voluptatum velit
        blanditiis numquam magni dolorum ab eligendi tempore tempora deleniti
        quae laborum quia reiciendis nostrum perferendis, culpa, dignissimos
        repudiandae nesciunt labore, veniam consequatur. Quas totam doloribus
        obcaecati rem. Accusamus numquam laudantium, vel maxime alias voluptatum
        impedit ut itaque architecto in ipsa cupiditate quaerat ipsum esse
        molestias! Dolor, perspiciatis. Architecto necessitatibus quasi placeat
        modi, rerum dolorum? Rem, ratione culpa? Consequatur quibusdam nam
        possimus dolore, deleniti, porro iste velit itaque amet quam nulla nisi
        laborum repudiandae voluptates obcaecati magnam pariatur reprehenderit,
        laudantium blanditiis iure dolores dolor error quia! Cum, quam! Ad,
        earum laboriosam velit iusto consectetur fuga sed sunt mollitia hic,
        magnam ea odio amet voluptatem blanditiis labore praesentium perferendis
        vel! Eaque in voluptate labore repellendus ipsa nostrum odio natus!
        Recusandae ex maiores, autem excepturi, voluptatum, quisquam cumque amet
        accusamus quia quam saepe dolore molestias vitae doloribus ut soluta
        eius! Doloremque molestias ad laborum soluta nihil cum reiciendis est
        qui. Veritatis quia adipisci nihil reprehenderit magni, beatae animi,
        delectus voluptates eligendi fugiat dolores reiciendis veniam ratione
        nobis asperiores cum, eum at incidunt. At reprehenderit eum corrupti.
        Consequatur facilis asperiores totam. Doloremque ullam soluta, aut
        corporis nostrum eius odit asperiores velit unde eligendi eaque sed
        laborum fuga nam. Nulla quis enim nostrum ad, corrupti delectus maiores
        voluptates id amet quasi assumenda. Eaque enim ipsam voluptas aspernatur
        eum alias, placeat quo, blanditiis, necessitatibus id optio tenetur
        beatae dolor atque architecto expedita aperiam suscipit dolorem ea quia
        sed voluptatum ab at! Optio, facere? Cum soluta delectus, distinctio
        aperiam ex aliquam deserunt adipisci obcaecati quas et maiores
        praesentium, fuga possimus eligendi maxime? In explicabo dolor rem
        molestiae quisquam aperiam officia labore earum ipsa quos! At veniam
        aspernatur maxime autem eligendi alias fuga deserunt labore quae debitis
        officiis quia ipsa dolorum harum, laborum possimus eius architecto enim
        beatae tempore. Vel iure architecto ipsa magnam. Iure? Repellendus
        mollitia officiis, corporis placeat maiores nulla repellat explicabo
        recusandae ullam, minima veniam nobis harum ut reprehenderit velit?
        Facere accusantium sunt recusandae quam illo ad iusto officiis
        voluptatem natus sequi? Iure consequatur sunt, consequuntur vitae
        blanditiis ex porro tempore aperiam sapiente doloribus beatae commodi,
        rerum at quis distinctio in qui? Impedit fugiat exercitationem ratione
        quam enim corporis autem dolorum velit. Sit est dolore placeat ab
        numquam quidem dicta voluptatum voluptas inventore quisquam
        necessitatibus nobis ullam, fugiat eius officiis minima? Culpa assumenda
        dicta consectetur excepturi voluptatum dolorum ullam, delectus itaque
        temporibus. Tempore natus, saepe quam sequi repellendus mollitia ipsam
        exercitationem rem, doloremque rerum architecto? Molestias nam ducimus,
        doloremque similique fugit, dicta, amet ut repudiandae nostrum tempore
        ipsam. Nulla laudantium nostrum impedit! Expedita aperiam impedit
        repudiandae quae architecto, debitis pariatur, iusto iste possimus
        exercitationem placeat perspiciatis eos quos, quidem quam? Ut dolorum
        cum dolore totam similique neque, quod a accusantium quae sunt? Magni
        voluptate enim nobis eos repellendus repudiandae eaque impedit vel sit?
        Eligendi esse quo quos architecto doloribus, sit, culpa labore vitae
        quaerat ducimus eos? Corrupti, voluptatum vero! Pariatur, architecto
        nam. Dolores nihil velit qui pariatur quas excepturi mollitia similique
        facilis, officia facere provident, voluptatem, error animi! Voluptates
        autem iste sit, odio et a tempore necessitatibus pariatur, esse
        quibusdam reiciendis soluta! Fugiat praesentium similique nihil iste
        nulla perferendis pariatur ab architecto sequi, officia ipsam cupiditate
        minima est, nemo illum magni quas animi, earum molestiae. Delectus nisi
        unde deleniti illum quidem quo. Sequi, adipisci fugit maiores molestiae
        cupiditate expedita, nihil placeat exercitationem dicta laudantium eaque
        voluptatibus dolorum iusto amet explicabo deleniti beatae autem
        asperiores a doloribus atque quisquam? Sapiente fuga quaerat officia.
        Maxime enim unde ipsa quisquam animi dicta officia consequuntur at neque
        tempora! Impedit praesentium, inventore assumenda amet quasi ducimus
        earum saepe explicabo architecto distinctio aperiam beatae corporis id
        itaque cupiditate. Minima itaque tempore nihil officia facilis,
        quibusdam fugiat qui, necessitatibus, beatae expedita unde earum
        blanditiis consequuntur aut et repudiandae tenetur iusto laudantium
        possimus? Facilis, aperiam ipsum fugit dicta tenetur sequi? Voluptatum
        culpa, repellat incidunt magnam aut rerum in qui. Totam reiciendis nam
        iure, ad maiores porro sequi pariatur. Consequuntur doloremque
        accusantium deleniti dolor consequatur reiciendis sint rem praesentium
        harum voluptate. Mollitia beatae repellendus voluptatibus asperiores
        pariatur molestiae, odit vitae eos? Ex hic quos corrupti accusantium ea,
        consequatur laudantium magni harum. Necessitatibus voluptatem itaque
        amet, nostrum culpa dolorum voluptates dicta eos. Dolorem molestias
        optio error maiores earum culpa nihil vel enim in repellat, provident
        nemo distinctio officia est numquam repellendus quaerat architecto non
        similique magnam nam consequatur adipisci necessitatibus sequi! Autem.
        Vitae officiis error libero, veniam deleniti aut nam quam. Sunt nihil
        sed impedit maiores facilis dolor minus, qui dolores culpa alias aperiam
        sit ipsam repudiandae ullam ipsa ab labore adipisci. Commodi distinctio
        ab molestias facilis. Illo accusantium architecto doloremque repellat
        non a nesciunt repellendus iusto consectetur? Ut fuga sapiente at
        deserunt totam dignissimos illum reiciendis quo laboriosam minima! Amet,
        eos! Assumenda possimus saepe dignissimos in impedit iusto consectetur
        quam debitis reiciendis aliquam, fuga mollitia et aliquid. Commodi
        delectus laborum molestiae tempore ipsum pariatur animi nemo recusandae
        nihil, quod quidem sint. Error tempore illum, quae deserunt quam eaque
        amet dicta hic rerum ab unde expedita nobis molestiae beatae aliquam
        animi ipsa quisquam tenetur, quis voluptas facere dolore corporis.
        Expedita, eos exercitationem! Repellat iure deleniti consequuntur
        necessitatibus doloremque facilis delectus tenetur fugit ad
        reprehenderit, quidem non fuga, praesentium rem sapiente autem libero
        expedita perspiciatis itaque laborum architecto voluptatibus quaerat
        nostrum repudiandae. Quas! Quibusdam repellendus non assumenda iure
        similique quisquam ex asperiores velit dolores fuga incidunt corrupti,
        vitae nostrum cum labore id! Suscipit aliquam labore voluptatem,
        veritatis id sint aliquid accusamus laudantium quaerat. Earum quas
        voluptas nobis reprehenderit ipsa facilis sint doloremque amet, rerum
        autem quibusdam at quod, eaque quasi asperiores nam nostrum esse
        veritatis natus cupiditate incidunt, provident libero. Deleniti,
        reprehenderit quod? Minima, consequuntur odit alias veritatis odio
        voluptatibus corporis nihil enim neque voluptates quo impedit facere
        culpa quaerat qui aliquid. Voluptatibus minima vel dolorem rerum
        provident! Voluptate id harum delectus dolores. Quae nostrum quo culpa
        commodi modi quod rerum suscipit ab, totam consectetur optio at aliquam
        asperiores nihil ducimus amet ipsa inventore? Minima repudiandae
        ducimus, tenetur sint quod vero molestiae. Nostrum. Minus quaerat, error
        commodi illum inventore expedita sed? Aperiam dolorem autem eligendi
        illum ratione facere pariatur eum deserunt, cumque incidunt consequatur
        recusandae architecto quo exercitationem id fugiat doloremque. Labore,
        ratione! Illo esse reiciendis consequuntur asperiores officia quod
        exercitationem delectus similique laboriosam commodi. Pariatur dicta
        tempore, vero ipsa officia nihil sed doloribus eveniet, quas earum,
        ducimus quae ea? Officiis, sequi exercitationem! Ad repudiandae
        provident aut. Perspiciatis voluptatum, veritatis cum impedit
        repudiandae aliquam incidunt qui dolore totam voluptatem, autem,
        consequuntur modi aut laboriosam? Natus laudantium voluptatum doloremque
        porro eligendi eos rerum sunt. Vitae possimus ratione similique quaerat
        ad tempora dicta, totam temporibus architecto ullam perspiciatis
        nesciunt dignissimos, quos adipisci recusandae velit minima quidem
        dolores odio iste incidunt et voluptas eius? Ad, voluptate? Numquam
        consequatur eveniet, dolorem voluptate magni in nihil deserunt autem
        saepe recusandae est dolorum? Asperiores commodi nobis odio, odit, culpa
        laboriosam eveniet consectetur eos accusamus, doloremque earum quasi
        magni voluptate. Deleniti veritatis qui vel aliquam. Autem iure sit vel
        distinctio accusamus illum nisi temporibus? Voluptas incidunt accusamus
        nisi rem. Soluta quibusdam porro voluptas quas praesentium explicabo
        corrupti quae iure eaque! Atque numquam recusandae quibusdam fugiat rem
        laboriosam, explicabo doloribus commodi, aut, ipsum ad libero voluptatem
        consequatur. Blanditiis tempora laborum saepe est quod! Odit ullam
        suscipit debitis excepturi? Reprehenderit, dolore qui. Voluptas id quia
        maiores in, ipsa deserunt, ratione totam odit, laboriosam eum ad? Quos,
        odit nesciunt. Veniam labore quas ad odit! Tenetur similique illum
        natus, atque quam culpa dignissimos totam! Ut accusamus velit explicabo
        illum dicta, assumenda ex voluptatum impedit dolore enim doloremque
        pariatur, sed similique ipsa rem quaerat illo nulla quia a iure libero
        ad corporis! Excepturi, quia placeat. At vitae odit, magni fugiat enim
        dolor aspernatur necessitatibus non perferendis mollitia alias
        praesentium inventore ullam, consequuntur unde, nisi officiis recusandae
        amet ducimus eveniet consequatur eum! Labore voluptas at adipisci! Aut
        quae labore qui, voluptatum illum minima error placeat excepturi
        praesentium facilis, provident tempore. Repellendus eveniet iste nam
        reprehenderit corporis veritatis unde beatae provident nobis aliquid,
        dolores commodi, atque debitis. Quis illum adipisci molestias, odit
        mollitia exercitationem ipsum non quisquam voluptatem tempora ex fugiat
        quidem architecto veritatis necessitatibus eligendi similique
        laboriosam. Facilis maiores nihil, laborum quasi itaque voluptate
        placeat unde! Similique corrupti quis aliquid quidem a quia voluptas,
        temporibus velit repellat, sunt assumenda nihil veniam ea alias suscipit
        dolor! Ex quos facilis iste minus modi fuga nesciunt saepe ut numquam!
        Ipsa nihil expedita aliquid illum sapiente molestias? Magnam voluptatum
        unde maxime corporis quibusdam odit in quo distinctio libero atque nihil
        vel, eius blanditiis aperiam dolorum accusantium quod natus dignissimos.
        Fugit. Laborum perferendis itaque similique est dolorum beatae rerum
        sunt iure soluta, atque eveniet, voluptatum libero repellendus
        accusantium eligendi. Atque voluptatem suscipit sint itaque assumenda
        vero tenetur cumque esse aperiam molestiae? Sed tempora beatae dicta sit
        eaque, enim voluptates modi obcaecati corporis, ullam fuga neque ducimus
        sequi nemo hic sapiente dolores. Vitae magni voluptate eum nobis
        temporibus distinctio aut alias repellendus? Molestiae veniam
        necessitatibus eaque quia ex laborum, dolorem vel temporibus atque
        laudantium, a dolor. Dicta laboriosam rerum earum consequuntur qui quae
        quos, ea ab explicabo sit hic, reiciendis molestias libero. Laboriosam
        quisquam accusamus adipisci, eum quam non veritatis exercitationem
        facere inventore quae nam tempora minus similique, repudiandae explicabo
        dolore dolorem delectus dolorum voluptas iste! Commodi ea tenetur alias
        quam voluptate? Velit maiores laudantium labore, at ratione vero unde,
        sint quasi sed quos officiis libero laboriosam aliquid pariatur corporis
        illum quis eum? Iusto, dicta est. Veritatis, magni! Obcaecati magni
        neque fugit. Quam consequuntur libero porro animi magnam accusantium
        placeat, perspiciatis possimus ipsam fuga adipisci nulla eveniet nobis
        repudiandae at, qui dolores cumque incidunt blanditiis? Reprehenderit
        pariatur blanditiis non mollitia, ducimus dolorum. Assumenda,
        doloremque. Exercitationem iusto consectetur eaque iste, tempora magni
        voluptates. Repellendus repudiandae accusantium neque quas doloribus
        impedit, ab aut quo deserunt maxime, aliquam officiis necessitatibus
        culpa natus iste labore corporis! Nihil, nulla expedita! Ullam maiores
        velit voluptates, dignissimos, deserunt suscipit neque illo repellendus
        pariatur delectus harum aspernatur hic maxime inventore perferendis
        dicta! Aliquid magni iusto facere corporis sed, est nostrum. Ad
        blanditiis nesciunt omnis enim maxime? Consequatur minima voluptate at
        alias quae, excepturi vel error doloribus repellat. Hic eveniet
        voluptatum alias exercitationem in porro! Impedit molestias nemo
        doloribus atque quasi! Facilis, nemo deleniti exercitationem, quae
        nostrum nobis repellat architecto, molestias animi debitis omnis ullam
        beatae libero aliquam. Ab qui, quibusdam omnis dolores aliquid
        voluptatem illum ratione neque ut minima vero. Sapiente aut iste ducimus
        harum, veniam laborum quos dolor dolores blanditiis est animi
        consequuntur molestias ratione a, voluptate ea mollitia quidem tempora
        asperiores numquam consectetur quis laboriosam! Veritatis, esse iure?
        Ullam recusandae eveniet vel aspernatur? Eius, eligendi. Veritatis,
        enim! Velit ipsam consequatur optio hic, placeat tempore aut vitae autem
        fugit ad. Quaerat saepe molestias maiores recusandae impedit, delectus
        facilis! Quam. Quibusdam possimus dolorum sunt minus, praesentium
        veritatis dolor, incidunt adipisci temporibus voluptates corrupti neque
        quae earum rerum atque vero omnis natus eveniet sed nisi nemo. Deleniti
        accusantium earum sapiente distinctio? Libero repudiandae, quia aliquid
        laudantium nam vitae blanditiis est! Dolore nulla architecto quisquam
        repellendus? Dolor, expedita culpa fuga repellat quidem qui magni,
        aperiam, in maxime rerum voluptates repellendus illum accusamus! Nemo
        assumenda quos perferendis accusantium numquam. Ea id nemo totam omnis
        inventore saepe impedit natus magnam dolore deserunt? Iste minus
        expedita vel suscipit eligendi distinctio, perspiciatis voluptas fugit.
        Libero, eligendi. Soluta ab ex reiciendis quo explicabo eius accusamus
        exercitationem, nisi id incidunt, error asperiores eaque dolorum, sunt
        animi recusandae eos. Inventore nisi autem asperiores, incidunt culpa
        cupiditate ipsum fugiat repudiandae. Voluptatibus, dolor ex veniam
        reiciendis porro, quos blanditiis libero doloribus expedita quas quod
        est dolorum dicta magnam dolores excepturi at nobis, maiores fuga vel
        quia temporibus obcaecati? Tempora, commodi accusamus? Temporibus
        asperiores qui vero ad iure beatae dicta quia at autem placeat quos
        doloribus magni soluta, molestias modi repellendus cumque officiis
        repellat harum corporis alias nihil nostrum quisquam ipsum! Natus!
        Eveniet ratione temporibus amet repellat eius a error impedit aut iure!
        Vero molestiae, sed ab quos dolore quidem quis iure, praesentium
        consequatur laudantium aperiam minus illo enim tenetur hic amet?
        Deleniti quas maxime, voluptas porro inventore omnis accusantium ratione
        consequuntur voluptatibus sint incidunt aspernatur quisquam odio
        obcaecati error at non vero perspiciatis dignissimos, autem nihil
        possimus vel! Ex, officia totam. Soluta velit iusto excepturi nam ullam
        tenetur suscipit odio tempora eos nulla enim eaque nobis dolores illum
        ut necessitatibus, obcaecati dolorem, asperiores molestias? Doloribus
        qui impedit vero maxime officia odit! Quibusdam, consectetur, excepturi
        libero officia rem in iure ex dolorem provident possimus quia, eligendi
        ipsum tempora qui voluptatum! Iste ab ex iure dolor deserunt, eos totam
        aperiam similique dolorum dignissimos. Rerum dolore et maxime numquam
        repudiandae corrupti molestias quibusdam iusto commodi vel provident,
        consectetur ipsum officia veniam accusantium ullam deleniti laudantium
        consequuntur. Vel, hic autem aperiam natus voluptatibus officia soluta.
        Dolorem dolorum, distinctio voluptates et velit nemo natus libero dolor
        maxime inventore cumque tempora totam modi ipsam sed laboriosam quam
        ullam minus assumenda voluptatem esse reiciendis exercitationem
        explicabo? Architecto, aliquid? Cupiditate itaque veritatis cumque
        ducimus illum dolorem consectetur voluptatibus tempora, repellendus
        pariatur, eaque exercitationem maiores commodi, natus laborum eum eos
        magni vel. Facere soluta ipsum libero, molestiae praesentium nihil
        nostrum? Sunt consectetur odit quas error corporis vero blanditiis
        consequuntur non, molestias harum necessitatibus facere, repudiandae, at
        excepturi quibusdam earum est deserunt aliquid labore et doloremque
        ipsum sit voluptate molestiae? Pariatur! Nemo hic sint odio id,
        assumenda illum nam praesentium autem obcaecati repellat nostrum, ullam
        debitis quidem facilis quod vitae quia natus quis ducimus nobis saepe
        consequuntur esse? Cum, libero illum! Veritatis fuga in blanditiis,
        dolor porro quia molestiae unde nostrum nulla expedita tempora enim esse
        libero debitis quae maxime quaerat. Nobis laborum nisi enim ducimus
        mollitia recusandae distinctio iusto dolor? Eligendi nulla voluptatibus,
        sapiente eveniet animi necessitatibus qui ab sint labore voluptate cum
        dolor accusamus beatae expedita omnis repellendus corrupti saepe!
        Placeat enim deserunt, sit quod repellendus velit dicta totam. Deserunt
        laborum quod beatae voluptates totam rem nesciunt ipsa. Tempora
        architecto reprehenderit omnis libero eum! Neque atque labore ab
        excepturi ipsum consequuntur pariatur iusto ratione est similique.
        Provident, ab dignissimos. Pariatur nemo magni expedita accusantium
        sapiente iusto. Tenetur blanditiis pariatur excepturi iste et aliquam
        magnam accusantium labore inventore quam. At quos, eum ipsa amet error
        dignissimos quae culpa esse aut? Numquam cum ab saepe explicabo. Soluta
        cum perspiciatis veniam corporis, accusantium vitae ut, ratione, porro
        ducimus doloribus numquam beatae distinctio eos obcaecati sed accusamus
        repellat ullam neque commodi. Consequatur, totam. Harum adipisci est,
        atque repellendus obcaecati accusamus quis numquam expedita animi ex
        totam distinctio dolores fugiat saepe eaque consequuntur pariatur
        officia voluptatibus ad. Consequuntur quos necessitatibus, error
        pariatur nostrum id. Impedit suscipit officia incidunt obcaecati vel
        iste saepe quasi maxime, qui recusandae laborum eligendi totam. Iusto
        architecto dignissimos porro enim, dolor totam voluptates reiciendis
        animi quod! Dolorem sit vitae dolores? Quaerat consequatur doloribus,
        sunt reiciendis ut consequuntur odit deserunt accusamus cupiditate
        aspernatur fugit architecto eveniet rerum maxime placeat. Ex, modi vero
        dolorem sit minima cum asperiores itaque. Debitis, alias dignissimos?
        Sequi quis blanditiis ipsa nesciunt iure voluptas quidem. Consequuntur
        esse molestias est vel ut? Iste dolorum, exercitationem nemo,
        necessitatibus repellendus, voluptate nihil animi nesciunt ipsam maxime
        cupiditate repellat assumenda sunt? In, placeat iure. Rem, expedita odio
        reprehenderit laudantium placeat ea sunt eius. Tenetur qui odit
        molestias voluptatum iure sit nobis, voluptatem sunt animi optio eaque,
        enim ut obcaecati hic explicabo! Explicabo sequi consequatur molestias
        dignissimos cum vitae quia voluptatum ducimus magni laudantium excepturi
        necessitatibus ipsam saepe nam, odit soluta minima sunt quibusdam
        doloribus! Ipsa natus quos ut iure ad asperiores?
      </div>
    </div>
  );
};

export default Dashboard;
