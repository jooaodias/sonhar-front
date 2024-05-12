/* ---------------------------------------------------------------------------
 *
 *     Copyright © 2023 THALES. All Rights Reserved.
 *
 * ---------------------------------------------------------------------------
 * THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
 * CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
 * PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
 * NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
 * SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
 * SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
 * PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). THALES GROUP
 * SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
 * HIGH RISK ACTIVITIES.
 * ---------------------------------------------------------------------------
 */

import React, { ReactNode, useMemo, useState } from "react";
import { IAuthenticatedUser } from "../../models/login";

interface IUserContext {
  loggedUser: IAuthenticatedUser;
  setLoggedUser: (useInfo: IAuthenticatedUser) => void;
  logout: () => void;
}

export const UserContext = React.createContext<IUserContext>(null);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<IAuthenticatedUser>();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getMyInfo()
  //     .then((res) => {
  //       setLoggedUser(getUserInfo(res));
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  const logout = () => {
    // logoutUser();
    setLoggedUser(null);
    localStorage.clear();
  };

  const providerValue = useMemo<IUserContext>(
    () => ({
      loggedUser,
      setLoggedUser,
      logout,
    }),
    [loggedUser, setLoggedUser]
  );

  if (loading) return <div style={{ height: "100vh" }}></div>;

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
