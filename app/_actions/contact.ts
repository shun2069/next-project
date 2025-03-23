"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // 入力バリデーション
  if (!rawFormData.lastname) {
    return { status: "error", message: "姓を入力してください" };
  }
  if (!rawFormData.firstname) {
    return { status: "error", message: "名を入力してください" };
  }
  if (!rawFormData.company) {
    return { status: "error", message: "会社名を入力してください" };
  }
  if (!rawFormData.email) {
    return { status: "error", message: "メールアドレスを入力してください" };
  }
  if (!validateEmail(rawFormData.email)) {
    return { status: "error", message: "メールアドレスの形式が誤っています" };
  }
  if (!rawFormData.message) {
    return { status: "error", message: "メッセージを入力してください" };
  }

  // 環境変数のチェック
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    console.error("HUBSPOTの環境変数が設定されていません");
    return {
      status: "error",
      message: "サーバーの設定に問題があります",
    };
  }

  try {
    const result = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "lastname", value: rawFormData.lastname },
            { name: "firstname", value: rawFormData.firstname },
            { name: "company", value: rawFormData.company },
            { name: "email", value: rawFormData.email },
            { name: "message", value: rawFormData.message },
          ],
        }),
      }
    );

    if (!result.ok) {
      console.error("HubSpot APIからエラー応答", await result.text());
      return {
        status: "error",
        message: "HubSpotへの送信に失敗しました",
      };
    }

    await result.json(); // エラーがないならレスポンスをパース
    return { status: "success", message: "OK" };

  } catch (e) {
    console.error("送信エラー", e);
    return {
      status: "error",
      message: "お問い合わせに失敗しました",
    };
  }
}
