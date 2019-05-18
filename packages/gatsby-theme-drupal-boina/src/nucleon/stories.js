import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc, withDocs, withReadme } from 'storybook-readme';

import NucleonDocs from 'nucleon-ui/nucleon/nucleon.md';
import SettingsDocs from 'nucleon-ui/nucleon/settings/settings.md';
import ColorsDocs from 'nucleon-ui/nucleon/settings/colors.md';
import ToolsDocs from 'nucleon-ui/nucleon/tools/tools.md';
import ElementsDocs from 'nucleon-ui/nucleon/elements/elements.md';
import ObjectsDocs from 'nucleon-ui/nucleon/objects/objects.md';
import GridDocs from 'nucleon-ui/nucleon/objects/grid.md';
import GridUtilitiesDocs from 'nucleon-ui/nucleon/objects/grid-utilities.md';
import UtilitiesDocs from 'nucleon-ui/nucleon/utilities/utilities.md';
import sassVariables from './protons.scss';

const colors = sassVariables.colors.split(' ');

storiesOf('Nucleon', module)
  .add('Getting Started', doc(NucleonDocs))
  .add('Variables', doc(SettingsDocs))
  .add(
    'Colors',
    withDocs(ColorsDocs, () => (
      <div className="container">
        <div className="grid-x">
          { colors.map(color => (
            <div key={color} className="cell medium-2 align-center-middle u-push-bottom">
              <div className={`palette u-bg--${color}`} />
              { color }
            </div>
          )) }
        </div>
      </div>
    ))
  )
  .add('Tools', doc(ToolsDocs))
  .add(
    'Typography',
    withDocs(ElementsDocs, () => (
      <div className="container">
        <h1 className="grid-x align-left">h1</h1>
        <h2 className="grid-x align-left">h2</h2>
        <h3 className="grid-x align-left">h3</h3>
        <h4 className="grid-x align-left">h4</h4>
        <h5 className="grid-x align-left">h5</h5>
        <h6 className="grid-x align-left">h6</h6>
        <p className="grid-x align-left">p</p>
        <hr className="0-divider" />
        <h3 className="grid-x align-left">Lists</h3>
        <p className="grid-x align-left"><strong>Unordered list</strong></p>
        <p className="grid-x align-left">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </p>
        <p className="grid-x align-left"><strong>Ordered list</strong></p>
        <p className="grid-x align-left">
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
        </p>
        <p className="grid-x align-left"><strong>Links</strong></p>
        <p className="grid-x align-left"><a href="/">Link</a></p>
        <p className="grid-x align-left"><strong>Quotes</strong></p>
        <blockquote className="u-text-align-left">
          Those people who think they know everything are a great annoyance to those of us who do.
          <cite>Isaac Asimov</cite>
        </blockquote>
        <p className="grid-x align-left"><strong>Definition list</strong></p>
        <p>
          <dl className="u-text-align-left">
            <dt>Time</dt>
            <dd>The indefinite continued progress of existence and events in the past.</dd>
            <dt>Space</dt>
            <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
            <dd>The dimensions of height, depth, and width within which.</dd>
          </dl>
        </p>
      </div>
    ))
  );

storiesOf('Nucleon/Objects', module)
  .add('Objects', withReadme(ObjectsDocs, () => (
    <div className="u-full-padding">
      <h1>Divider</h1>
      <hr />
      <h1>List bare</h1>
      <ul className="o-list-bare">
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item">Item</li>
      </ul>
      <h1>Media</h1>
      <div className="o-media">
        <div className="o-media__img">
          <img src="https://placeimg.com/150/150/any" alt="Random" />
        </div>
        <div className="o-media__body">
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <h1>Flag</h1>
      <div className="o-flag o-flag--small">
        <div className="o-flag__img">
          <img src="https://placeimg.com/150/150/any" alt="Random" />
        </div>
        <div className="o-flag__body">
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          </p>
        </div>
      </div>
      <h1>Table</h1>
      <table className="o-table o-table--small">
        <tbody>
          <tr>
            <td>Content</td>
            <td>Content</td>
            <td>Content</td>
            <td>Content</td>
          </tr>
        </tbody>
      </table>
      <h1>Ratio</h1>
      <div className="o-ratio o-ratio--16:9">
        <img src="https://placeimg.com/1280/720/any" className="o-ratio__content" alt="Random" />
      </div>
    </div>
  )));
storiesOf('Nucleon/Objects/Grid', module)
  .add('Grid', withReadme(GridDocs, () => (
    <div className="u-full-padding docs">
      <h1>Horizontal Grid</h1>
      <div className="grid-x">
        <div className="cell">full width cell</div>
        <div className="cell">full width cell</div>
      </div>
      <div className="grid-x">
        <div className="cell small-6">6 cells</div>
        <div className="cell small-6">6 cells</div>
      </div>
      <div className="grid-x">
        <div className="cell medium-6 large-4">12/6/4 cells</div>
        <div className="cell medium-6 large-8">12/6/8 cells</div>
      </div>
      <h1>Gutters</h1>
      <div className="grid-x grid-margin-x">
        <div className="cell medium-6 large-4">12/6/4 cells</div>
        <div className="cell medium-6 large-8">12/6/8 cells</div>
      </div>
      <div className="grid-x grid-padding-x">
        <div className="cell medium-6 large-4">12/6/4 cells</div>
        <div className="cell medium-6 large-8">12/6/8 cells</div>
      </div>
      <h2>Grid Container</h2>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
        </div>
      </div>
      <h2>Grid Container Fluid</h2>
      <div className="grid-container fluid">
        <div className="grid-x grid-margin-x">
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
        </div>
      </div>
      <h2>Grid Container Full</h2>
      <div className="grid-container full">
        <div className="grid-x grid-margin-x">
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
          <div className="cell small-4">cell</div>
        </div>
      </div>
      <h2>Auto Sizing</h2>
      <div className="grid-x grid-margin-x">
        <div className="cell small-4">4 cells</div>
        <div className="cell auto">Whatevers left!</div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="cell small-4">4 cells</div>
        <div className="cell auto">Whatevers left!</div>
        <div className="cell auto">Whatevers left!</div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="cell shrink">Shrink!</div>
        <div className="cell auto">Expand!</div>
      </div>
      <h2>Responsive Adjustments</h2>
      <div className="grid-x">
        <div className="cell large-auto">One</div>
        <div className="cell large-auto">Two</div>
        <div className="cell large-auto">Three</div>
        <div className="cell large-auto">Four</div>
        <div className="cell large-auto">Five</div>
        <div className="cell large-auto">Six</div>
      </div>
      <h2>Collapse Cells</h2>
      <div className="grid-x grid-margin-x medium-margin-collapse">
        <div className="cell small-6">
          Gutters at small no gutters at medium.
        </div>
        <div className="cell small-6">
          Gutters at small no gutters at medium.
        </div>
      </div>
      <h2>Offsets</h2>
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 large-offset-2">Offset 2 on large</div>
        <div className="cell small-4">4 cells</div>
      </div>
      <h2>Block Grids</h2>
      <div className="grid-x grid-padding-x small-up-2 medium-up-4 large-up-6">
        <div className="cell">cell</div>
        <div className="cell">cell</div>
        <div className="cell">cell</div>
        <div className="cell">cell</div>
        <div className="cell">cell</div>
        <div className="cell">cell</div>
      </div>
      <h1>Vertical Grids</h1>
      <div className="grid-y" style={{ height: '500px' }}>
        <div className="cell small-6 medium-8 large-2">
          6/8/2
        </div>
        <div className="cell small-6 medium-4 large-10">
          6/4/10
        </div>
      </div>
      <h1>Grid Frame</h1>
      <div className="grid-y medium-grid-frame">
        <div className="cell shrink header medium-cell-block-container">
          <h1>Grid Frame Header</h1>
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4">
            A medium 4 cell
            </div>
            <div className="cell medium-4 medium-cell-block">
              <p style={{ width: '80vw' }}>
              A medium 4 cell block... on medium this content should overflow and
              let you horizontally scroll across... one might use this for an array of options
              </p>
            </div>
            <div className="cell medium-4">
            A medium 4 cell
            </div>
          </div>
        </div>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4 medium-cell-block-y">
              <h2>Independent scrolling sidebar</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio,
              accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis,
              euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis.
              Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus,
              est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices
              porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique
              ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec
              tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat.
              Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis,
              et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.
              </p>
              <p>
              Suspendisse pulvinar, massa iaculis feugiat lobortis, dolor sapien
              vestibulum nulla, vel cursus tellus leo in lorem. Aliquam eu placerat
              urna. Suspendisse sed viverra orci, ut mattis neque. Fusce non ultrices
              nisi. In sagittis varius mollis. Quisque dolor quam,
              consectetur eu lacinia ac, ullamcorper vel arcu. Nullam mattis imperdiet nulla
              sed ornare. Praesent tristique, est id eleifend vestibulum, neque nibh condimentum ex,
              nec lobortis purus justo a libero. Phasellus id ex ac nunc hendrerit hendrerit.
              Nullam urna ipsum, rutrum at fringilla vel, venenatis non purus. Maecenas egestas
              ex vitae venenatis molestie. Ut et odio egestas, accumsan neque et, viverra nisl.
              Sed faucibus nec nulla sed imperdiet. Fusce quis sem ac urna semper tempor a id elit.
              Nulla fringilla vitae sapien a vehicula.
              </p>
            </div>
            <div className="cell medium-8 medium-cell-block-y">
              <h2>Independent scrolling body</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio,
              accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis,
              euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis.
              Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus,
              est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices
              porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin
              tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a,
              efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui.
              Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis.
              Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a,
              hendrerit risus.
              </p>
              <p>
              Suspendisse pulvinar, massa iaculis feugiat lobortis, dolor sapien vestibulum
              nulla, vel cursus tellus leo in lorem. Aliquam eu placerat urna. Suspendisse sed
              viverra orci, ut mattis neque. Fusce non ultrices nisi. In sagittis varius mollis.
              Quisque dolor quam, consectetur eu lacinia ac, ullamcorper vel arcu. Nullam mattis
              imperdiet nulla sed ornare. Praesent tristique, est id eleifend vestibulum, neque
              nibh condimentum ex, nec lobortis purus justo a libero. Phasellus id ex ac nunc
              hendrerit hendrerit. Nullam urna ipsum, rutrum at fringilla vel, venenatis non purus.
              Maecenas egestas ex vitae venenatis molestie. Ut et odio egestas, accumsan neque et,
              viverra nisl. Sed faucibus nec nulla sed imperdiet. Fusce quis sem ac urna semper
              tempor a id elit. Nulla fringilla vitae sapien a vehicula.
              </p>
              <p>
              Nullam vestibulum lorem nec lectus egestas, nec ullamcorper diam maximus.
              Maecenas condimentum, nibh at blandit semper, ex erat tempus magna, id maximus
              neque velit accumsan nibh. Aenean dignissim lorem eu nisl laoreet vestibulum.
              Vivamus efficitur et augue vitae tincidunt. Etiam et magna felis. Integer mattis,
              nisi aliquet scelerisque blandit, ex mi sodales ante, eget accumsan quam magna
              et ligula. Curabitur id tristique leo. Proin rutrum mi vitae enim rhoncus, at
              cursus neque eleifend. Integer ultrices volutpat tellus ac porta. Fusce sollicitudin
              venenatis lacinia. Fusce ante lorem, gravida semper varius non, pharetra non erat.
              Sed dapibus arcu turpis, ac sollicitudin nibh lacinia vel. Nullam at enim porta,
              luctus metus sit amet, rutrum odio. Cras tempor enim vel pellentesque sollicitudin.
              Maecenas ullamcorper, sem non accumsan volutpat, neque tortor pulvinar orci,
              ut ultrices ligula lorem ut risus.
              </p>
              <p>
              Aliquam facilisis, nibh eget posuere suscipit, arcu sapien iaculis odio,
              in molestie dolor lectus vitae sem. Cras id nunc mollis mi rutrum dapibus.
              Quisque rutrum a augue at scelerisque. Praesent faucibus ac enim vitae gravida.
              Sed et sodales elit. Duis magna lectus, interdum sit amet metus a, sagittis
              varius magna. Proin nibh lectus, egestas a luctus ut, dapibus et enim.
              Curabitur fringilla ipsum vitae nunc imperdiet consectetur eget non neque.
              Suspendisse ultricies odio quis lorem vulputate, ac vulputate turpis feugiat.
              Maecenas posuere rhoncus orci, in ornare velit suscipit tempor. Curabitur
              pretium nisl id lorem placerat consequat. In quis quam eros. Nam mattis
              elit eu quam sagittis, in varius erat tempor.
              </p>
              <p>
              Fusce felis magna, pellentesque eget mollis a, rutrum id eros. Curabitur
              auctor varius arcu a consequat. Phasellus quis pulvinar enim, eu ultricies justo.
              Pellentesque risus libero, dapibus at erat ultricies, gravida varius erat.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Nulla tempus, justo ut laoreet mollis, nunc tellus convallis urna, vel
              pretium dui velit eget ligula. Aliquam semper sed nulla a molestie. Maecenas at
              egestas massa, vitae aliquam mi. Fusce nec sem egestas, pretium lacus non, tincidunt
              sapien. Sed tristique odio at ultricies vulputate. Integer et convallis augue,
              eu aliquam enim. Mauris ut faucibus diam. Donec vulputate nunc sed congue accumsan.
              Etiam lobortis nisi quis lacinia pharetra.
              </p>
            </div>
          </div>
        </div>
        <div className="cell shrink footer">
          <h3>Here is my footer</h3>
        </div>
      </div>
    </div>
  )))
  .add('Grid Utilities', withReadme(GridUtilitiesDocs, () => (
    <div className="u-full-padding docs">
      <h1>Flexbox Utilities</h1>
      <h2>Grid padding</h2>
      <div className="grid-x grid-padding-x">
        <div className="cell small-4">Cell 1</div>
        <div className="cell small-4">Cell 2</div>
        <div className="cell small-4">Cell 3</div>
      </div>
      <h2>Horizontal Alignment</h2>
      <div className="grid-x grid-padding-x">
        <div className="cell small-4">Aligned to</div>
        <div className="cell small-4">the left</div>
      </div>
      <div className="grid-x grid-padding-x align-right">
        <div className="cell small-4">Aligned to</div>
        <div className="cell small-4">the right</div>
      </div>
      <div className="grid-x grid-padding-x align-center">
        <div className="cell small-4">Aligned to</div>
        <div className="cell small-4">the center</div>
      </div>
      <div className="grid-x grid-padding-x align-justify">
        <div className="cell small-4">Aligned to</div>
        <div className="cell small-4">the edges</div>
      </div>
      <div className="grid-x grid-padding-x align-spaced">
        <div className="cell small-4">Aligned to</div>
        <div className="cell small-4">the space around</div>
      </div>
      <h2>Vertical Alignment</h2>
      <div className="grid-x grid-padding-x align-top">
        <div className="cell small-4">Im at the top (default)</div>
        <div className="cell small-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat!
          In sint, fugiat saepe sunt dolore tempore amet cupiditate.
        </div>
      </div>
      <p />
      <div className="grid-x grid-padding-x align-middle">
        <div className="cell small-4">Im in the middle</div>
        <div className="cell small-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat!
          In sint, fugiat saepe sunt dolore tempore amet cupiditate.
        </div>
      </div>
      <p />
      <div className="grid-x grid-padding-x align-bottom">
        <div className="cell small-4">Im at the bottom</div>
        <div className="cell small-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat!
          In sint, fugiat saepe sunt dolore tempore amet cupiditate.
        </div>
      </div>
      <p />
      <div className="grid-x grid-padding-x align-stretch">
        <div className="cell small-4">These cells have the same height</div>
        <div className="cell small-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat!
          In sint, fugiat saepe sunt dolore tempore amet cupiditate.
        </div>
      </div>
      <p />
      <div className="grid-x grid-padding-x">
        <div className="cell small-3 align-self-bottom"><div className="demo">Align bottom</div></div>
        <div className="cell small-3 align-self-middle"><div className="demo">Align middle</div></div>
        <div className="cell small-3 align-self-stretch"><div className="demo">Align stretch</div></div>
        <div className="cell small-3 align-self-top">
          <div className="demo">
          Align top. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis
          at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
          </div>
        </div>
      </div>
      <h2>Central Alignment</h2>
      <div className="grid-x grid-padding-x align-center-middle text-center" style={{ height: '200px' }}>
        <div className="cell small-4">I am in the center-middle</div>
        <div className="cell small-4">I am also centrally located</div>
      </div>
      <h2>Vanilla Flexbox Helper Classes</h2>
      <div className="grid-x grid-padding-x">
        <div className="cell small-4 flex-container flex-dir-column">
          <div className="callout primary flex-child-auto">Auto</div>
          <div className="callout primary flex-child-auto">Auto</div>
          <div className="callout primary flex-child-shrink">Shrink</div>
        </div>
        <div className="cell small-4" />
        <div className="cell small-4 align-self-top">
        Align top. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt
        fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?Align top. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos
        nobis at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?Align top.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius
        adipisci similique dignissimos nobis at excepturi incidunt fugit molestiae quaerat,
        consequuntur porro temporibus. Nisi, ex?
        </div>
      </div>
      <h2>Source Ordering</h2>
      <div className="grid-x grid-padding-x">
        <div className="cell small-6 small-order-2 medium-order-1">
          This column will come second on small, and first on medium and larger.
        </div>
        <div className="cell small-6 small-order-1 medium-order-2">
          This column will come first on small, and second on medium and larger.
        </div>
      </div>
    </div>
  )));

storiesOf('Nucleon/Utilities', module)
  .add('Utilities', withReadme(UtilitiesDocs, () => (
    <div className="u-full-padding docs">
      <h1>Background colors</h1>
      { colors.map(color => (
        <div key={color} className={`palette u-bg--${color}`}>{`color ${color}`}</div>
      )) }
      <h1>Borders</h1>
      <div className="palette u-border--top">Border top</div>
      <div className="palette u-border--bottom">Border bottom</div>
      <div className="palette u-border--left">Border left</div>
      <div className="palette u-border--right">Border right</div>
      <h1>Fonts</h1>
      <p className="u-alternative-font">Alternative font</p>
      <p className="u-slim-text">Slim font</p>
      <p className="u-micro-text">Micro font</p>
      <p className="u-tiny-text">Tiny font</p>
      <p className="u-normal-text">Normal font</p>
      <p className="u-medium-text">Medium font</p>
      <p className="u-large-text">Large font</p>
      <h1>Headings</h1>
      <h3 className="u-h1">h3 like h1</h3>
      <h1>Spacing</h1>
      <h2>Margin</h2>
      <div className="palette cell" />
      <div className="palette cell u-push-top--3x">margin top 3x</div>
      <div className="palette cell u-push-top">margin top 1x</div>
      <h2>Padding</h2>
      <div className="palette cell u-push-top--inside--3x">padding top 3x</div>
      <div className="palette cell u-push-top--inside">padding top 1x</div>
      <h1>Text alignment</h1>
      <p className="cell u-text-align-left">Text to the left</p>
      <p className="cell u-text-align-right">Text to the right</p>
      <p className="cell u-text-align-center">Text to the center</p>
      <p className="cell u-text-align-justify">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <h1>Text colors</h1>
      { colors.map(color => (
        <p key={color} className={`u-text--${color}`}>{`color ${color}`}</p>
      )) }
    </div>
  )));
