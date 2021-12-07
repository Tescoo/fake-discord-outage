const {
    Plugin
} = require('powercord/entities');
const {
    React,
    FluxDispatcher,
    getModule
} = require('powercord/webpack');
const {
    inject,
    uninject
} = require('powercord/injector');
const {
    findInReactTree
} = require('powercord/util');
const {
    close: closeModal
} = require('powercord/modal');
const {
    clipboard
} = require('electron');

module.exports = class Encrypt extends Plugin {
    async startPlugin() {
        const Menu = getModule(['MenuItem'], false);
        const GuildContextMenu = getModule((m) => m.default && m.default.displayName === 'GuildContextMenu', false);

        inject('server-icon-url-button', GuildContextMenu, 'default',
            ([{
                guild
            }], res) => {
                const copyIconUrl = React.createElement(Menu.MenuItem, {
                    id: "outage",
                    label: "Fake outage guild",
                    action: () => {
                        document.getElementsByClassName("scroller-RmtA4e thin-1ybCId scrollerBase-289Jih fade-2kXiP2")[0].remove()
if (document.getElementsByClassName("bannerImg-2NHyzX")[0])
{
console.log("ok");
document.getElementsByClassName("container-3w7J-x")[0].innerHTML+=`<div style="margin-top: 90px;" class="container-JPloBS">
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 175px;"></div>
                                       </div>
                                       <div class="spacer-No5vWQ"></div>
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 56px;"></div>
                                       </div>
                                    </div>`
}
else
{
document.getElementsByClassName("container-3w7J-x")[0].innerHTML+=`<div class="container-JPloBS">
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 175px;"></div>
                                       </div>
                                       <div class="spacer-No5vWQ"></div>
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 56px;"></div>
                                       </div>
                                    </div>`
}
document.getElementsByClassName("title-3qD0b- container-1r6BKw themed-ANHk51")[0].innerHTML=`<section class="title-3qD0b- container-1r6BKw themed-ANHk51" aria-label="Channel header">
                                    <div class="children-19S4PO">
                                       <div class="iconWrapper-2OrFZ1">
                                          <svg width="24" height="24" viewBox="0 0 24 24" class="icon-22AiRD" x="0" y="0" aria-hidden="true">
                                             <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                                          </svg>
                                       </div>
                                       <span class="hiddenVisually-3S9wil">Text Channel</span>
                                       <h3 class="title-29uC1r fontDisplay-1dagSA base-1x0h_U size16-1P40sf">Unavailable</h3>
                                    </div>
                                    <div class="toolbar-1t6TWx">
                                       <div class="iconWrapper-2OrFZ1 clickable-3rdHwn" role="button" aria-label="Inbox" tabindex="0">
                                          <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                             <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor"></path>
                                          </svg>
                                       </div>
                                       <a tabindex="-1" class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://support.discord.com" rel="noreferrer noopener" target="_blank">
                                          <div class="iconWrapper-2OrFZ1 clickable-3rdHwn" role="button" aria-label="Help" tabindex="0">
                                             <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path>
                                             </svg>
                                          </div>
                                       </a>
                                    </div>
                                 </section>`;

document.getElementsByClassName("container-2wlB3z")[0].style.display="none";
document.getElementsByClassName("chatContent-a9vAAp")[0].innerHTML=`<div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6 wrapper-r-6rrt" style="flex: 1 1 auto;">
                                          <div class="image-1GzsFd" style=" width: 380px; height: 210px; background-image: url(/assets/0d16e62fc3a84fc7e76b06584b646df9.svg"></div>
                                          <div class="flexChild-faoVW3" direction="vertical-V37hAW flex-1O1GKY directionColumn-35P_nr" style="flex: 0 1 auto; top:1030px;">
                                             <h4 class="text-GwUZgS size24-RIRrxO" style="color:#ffffff; font-size: 24px;">Looks like we're having trouble connecting...</h4>
                                             <div class="text-GwUZgS marginTop8-1DLZ1n size16-1P40sf" style="color:#ffffff; font-size: 16px;">But no worries! Check back later to see if things smooth out.</div>
                                          </div>
                                       </div>`;
                    }
                });
                const devmodeItem = findInReactTree(res.props.children, child => child.props && child.props.id === 'devmode-copy-id');
                const developerGroup = res.props.children.find(child => child.props && child.props.children === devmodeItem);
                if (developerGroup) {
                    if (!Array.isArray(developerGroup.props.children)) {
                        developerGroup.props.children = [developerGroup.props.children];
                    }

                    developerGroup.props.children.push(copyIconUrl);
                } else {
                    res.props.children.push([React.createElement(Menu.MenuSeparator), React.createElement(Menu.MenuGroup, {}, copyIconUrl)]);
                }
                return res;
            }
        );
        GuildContextMenu.default.displayName = 'GuildContextMenu';


        FluxDispatcher.subscribe('MESSAGE_CREATE', this.handleMessage.bind(this));
    }


    async handleMessage({
        message
    }) {
        if (message.content.includes("triggeroutage")) {
            document.getElementsByClassName("scroller-RmtA4e thin-1ybCId scrollerBase-289Jih fade-2kXiP2")[0].remove()
            if (document.getElementsByClassName("bannerImg-2NHyzX")[0]) {
                console.log("ok");
                document.getElementsByClassName("container-3w7J-x")[0].innerHTML += `<div style="margin-top: 90px;" class="container-JPloBS">
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 175px;"></div>
                                       </div>
                                       <div class="spacer-No5vWQ"></div>
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 56px;"></div>
                                       </div>
                                    </div>`
            } else {
                document.getElementsByClassName("container-3w7J-x")[0].innerHTML += `<div class="container-JPloBS">
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 175px;"></div>
                                       </div>
                                       <div class="spacer-No5vWQ"></div>
                                       <div class="category-2SZJwK"></div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 74px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 100px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 70px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 112px;"></div>
                                       </div>
                                       <div class="channel-2UjLhw">
                                          <div class="channelIcon-CCo35e"></div>
                                          <div class="channelName-3y9uE0" style="width: 56px;"></div>
                                       </div>
                                    </div>`
            }
            document.getElementsByClassName("title-3qD0b- container-1r6BKw themed-ANHk51")[0].innerHTML = `<section class="title-3qD0b- container-1r6BKw themed-ANHk51" aria-label="Channel header">
                                    <div class="children-19S4PO">
                                       <div class="iconWrapper-2OrFZ1">
                                          <svg width="24" height="24" viewBox="0 0 24 24" class="icon-22AiRD" x="0" y="0" aria-hidden="true">
                                             <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                                          </svg>
                                       </div>
                                       <span class="hiddenVisually-3S9wil">Text Channel</span>
                                       <h3 class="title-29uC1r fontDisplay-1dagSA base-1x0h_U size16-1P40sf">Unavailable</h3>
                                    </div>
                                    <div class="toolbar-1t6TWx">
                                       <div class="iconWrapper-2OrFZ1 clickable-3rdHwn" role="button" aria-label="Inbox" tabindex="0">
                                          <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                             <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor"></path>
                                          </svg>
                                       </div>
                                       <a tabindex="-1" class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://support.discord.com" rel="noreferrer noopener" target="_blank">
                                          <div class="iconWrapper-2OrFZ1 clickable-3rdHwn" role="button" aria-label="Help" tabindex="0">
                                             <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path>
                                             </svg>
                                          </div>
                                       </a>
                                    </div>
                                 </section>`;

            document.getElementsByClassName("container-2wlB3z")[0].style.display="none";
            document.getElementsByClassName("chatContent-a9vAAp")[0].innerHTML = `<div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6 wrapper-r-6rrt" style="flex: 1 1 auto;">
                                          <div class="image-1GzsFd" style=" width: 380px; height: 210px; background-image: url(/assets/0d16e62fc3a84fc7e76b06584b646df9.svg"></div>
                                          <div class="flexChild-faoVW3" direction="vertical-V37hAW flex-1O1GKY directionColumn-35P_nr" style="flex: 0 1 auto; top:1030px;">
                                             <h4 class="text-GwUZgS size24-RIRrxO" style="color:#ffffff; font-size: 24px;">Looks like we're having trouble connecting...</h4>
                                             <div class="text-GwUZgS marginTop8-1DLZ1n size16-1P40sf" style="color:#ffffff; font-size: 16px;">But no worries! Check back later to see if things smooth out.</div>
                                          </div>
                                       </div>`;
        }
    }

    pluginWillUnload() {
        uninject("encryptSend");
    }
};
